import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "antd/dist/antd.css";
import "./scss/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "./provider";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
