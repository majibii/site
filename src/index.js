import React from "react";
import { render } from "react-snapshot";
import { App } from "./app/App";
import "./i18n/i18n";
import "./index.css";

render(<App />, document.getElementById("root"));
