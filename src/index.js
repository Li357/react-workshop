import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Tweeter from "./Tweeter";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Tweeter />
  </StrictMode>,
  rootElement
);
