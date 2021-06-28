import * as ko from "knockout";
import "./app.css";

import "../../components/navbar"
import "../../components/main_panel"

// @ts-ignore
import template from "./app.html";
import viewModel from "./app";

ko.components.register("app", { template, viewModel });
