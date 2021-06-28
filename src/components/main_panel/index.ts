import * as ko from "knockout";

import "./suggested_film"

import "./main_panel.css";
// @ts-ignore
import template from "./main_panel.html";
import viewModel from "./main_panel";

ko.components.register("main_panel", { template, viewModel });