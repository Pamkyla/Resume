export default class SwapiService {

    _baseUrl = 'https://swapi.dev/api';

    getData = async (url) => {
        const response = await fetch(`${this._baseUrl}${url}`);

        if (!response.ok) {
            throw new Error(`we have a problem with fetch ${url}`);
        }
        return await response.json();
    }

    getAllPeople = async () => {
        const response = await this.getData('/people/');
        return response.results.map(this.transformPerson);
    }
    getPerson = async (id) => {
        const person = await this.getData(`/people/${id}/`);
        return this.transformPerson(person);
    }

    getAllPlanet = async () => {
        const response = await this.getData('/planets/');
        return response.results.map(this.transformPlanet);
    }
    getPlanet = async (id) => {
        const planet = await this.getData(`/planets/${id}/`);
        return this.transformPlanet(planet);
    }

    getAllShips = async () => {
        const response = await this.getData('/starships/');
        return response.results.map(this.transformShip);
    }
    getShip = async (id) => {
        const ship = await this.getData(`/starships/${id}/`);
        return this.transformShip(ship);
    }

    getId(item) {
        return item.url.match(/\/([0-9]*)\/$/)[1];
    }


    transformShip = (ship) => {
        return {
            id: this.getId(ship),
            name: ship.name,
            speed: ship.max_atmosphering_speed,
            crew: ship.crew,
            hyperdrive: ship.hyperdrive_rating,
            model: ship.model
        }
    }

    transformPlanet = (planet) => {
        return {
            id: this.getId(planet),
            name: planet.name,
            diameter: planet.diameter,
            population: planet.population,
            gravity: planet.gravity,
            climate: planet.climate
        }
    }

    transformPerson = (person) => {
        return {
            id: this.getId(person),
            name: person.name,
            gender: person.gender,
            mass: person.mass,
            birthDate: person.birth_year,
            height: person.height
        }
    }
}