export default class SwapiService {

    _baseUrl = 'https://swapi.dev/api';

    async getData(url) {
        const response = await fetch(`${this._baseUrl}${url}`);

        if (!response.ok) {
            throw new Error(`Houston, we have a problem ${url}`);
        }

        return await response.json();
    }

    async getAllPeople() {
        const response = await this.getData('/people/');
        return response.results.map(this.transformPerson);
    }
    async getPerson(id) {
        const person = await this.getData(`/people/${id}/`)
        return this.transformPerson(person);
    }

    async getPlanet(id) {
        const planet = await this.getData(`/planets/${id}/`);
        return this.transformPlanet(planet);
    }

    getId(item) {
        return item.url.match(/\/([0-9]*)\/$/)[1];
    }

    transformPerson = (person) => {
        return {
            id: this.getId(person),
            name: person.name,
            gender: person.gender,
            mass: person.mass,
            homeworld: person.homeworld
        }
    }

    transformPlanet(planet) {
        const id = planet.url.match(/\/([0-9]*)\/$/)[1];

        return {
            id: this.getId(planet),
            name: planet.name,
            diameter: planet.diameter,
            population: planet.population,
            gravity: planet.gravity
        }
    }
}