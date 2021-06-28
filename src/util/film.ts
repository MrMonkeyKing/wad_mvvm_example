/* PUBLIC */

/* CLASS */

export class Film {
    title: string;
    description: string;
    regisseur: string;
    release_date: string;
    actors: string[];
    rating: number;
    watched: number;


    constructor(object: {
        title: string,
        description: string,
        regisseur: string,
        release_date: string,
        actors: string[],
        rating: number,
        watched: number
    }) {
        this.title = object.title;
        this.description = object.description;
        this.regisseur = object.regisseur;
        this.release_date = object.release_date;
        this.actors = object.actors;
        this.rating = object.rating;
        this.watched = object.watched;

    }

}

/* FUNCTIONS */

export function fetchFilms() {
    const response = FILM_DB;
    let films: Film[] = [];

    for (let i = 0; i < response.length; i++) {
        const film = new Film(response[i]);
        films.push(film);
    }

    console.log(films)
    return films;
}

/* PRIVATE */

const FILM_DB = [
    {
        "title": "Titanic",
        "description": "blablabla",
        "regisseur": "hjklasdlkfdgjl",
        "release_date": "ojdf",
        "actors": ["asd", "asd", "asd"],
        "rating": 4,
        "watched": 20
    }
]