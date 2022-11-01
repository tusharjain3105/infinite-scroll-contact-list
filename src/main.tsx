import { render } from "preact";
import HomePage from "./components/HomePage";
import Provider from "./providers/Provider";
import './app.css'

render(
  <Provider>
    <HomePage />
  </Provider>,
  document.getElementById("app") as HTMLElement
);
