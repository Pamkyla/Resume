export default class SwapiService {

    _baseUrl = 'https://swapi.dev/api';
  
  async getData (url)  {
    const response = await fetch(`${this._baseUrl}${url}`);
  
    if (!response.ok) {
        throw new Error(`Houston, we have a problem ${url}`);
    }
  
    return await response.json();
    }
  
    async getAllPeople() {
        const response = await this.getData('/people/');
        return response.results;
    }
    getPerson(id) {
        return this.getData(`https://swapi.dev/api/people/${id}/`)
    }

    getPlanet(id) {
        return this.getData(`/planets/${id}/`)
    }
  }
  
 