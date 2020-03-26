export class SwapiService {
    _apiBase = 'https://swapi.co/api';
    _imageUrlBase = 'https://starwars-visualguide.com/assets/img';

    getResource = async (url) => {
        let res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch url, received ${res.status}`);
        }
        return await res.json();
    };

    getPersonImage = ({id}) => {
        return `${this._imageUrlBase}/characters/${id}.jpg`;
    };

    getPlanetImage = ({id}) => {
        return `${this._imageUrlBase}/planets/${id}.jpg`;
    };

    getStarshipImage = ({id}) => {
        return `${this._imageUrlBase}/starships/${id}.jpg`;
    };

    getAllPeople = async () => {
        const res = await this.getResource('/people/');
        return res.results.map(this._transformPerson);
    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    };

    getAllPlanets = async () => {
        const res = await this.getResource('/planets/');
        return res.results.map(this._transformPlanet);
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    };

    getAllStarships = async () => {
        const res = await this.getResource('/starships/');
        return res.results.map(this._transformStarships);
    };

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarships(starship);
    };

    _regExpId(item) {
        const RegExp = /\/([(0-9)]*)\/$/;
        return item.url.match(RegExp)[1];
    };

    _transformPlanet = (planet) => {
        return {
            id: this._regExpId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    _transformPerson = (person) => {
        return {
            id: this._regExpId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        };
    };

    _transformStarships = (starship) => {
        return {
            id: this._regExpId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        };
    };
}