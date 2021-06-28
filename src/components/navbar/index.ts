import * as ko from "knockout";
import "./navbar.css";
// @ts-ignore
import template from "./navbar.html";
import viewModel from "./navbar";

ko.components.register("navbar", { template, viewModel });