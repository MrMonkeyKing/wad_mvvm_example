import * as ko from "knockout";

import "./suggested_film.css";
// @ts-ignore
import template from "./suggested_film.html";
import viewModel from "./suggested_film";

ko.components.register("suggested_film", { template, viewModel })