import * as ko from "knockout";
import {Observable} from "knockout";
import {Film, fetchFilms} from "../../util/film";

interface AppParams {
}

export default class Main_panel {
    films: Film[] = [];

    constructor() {
        this.films = fetchFilms()
    }

    dispose() {
    }
}