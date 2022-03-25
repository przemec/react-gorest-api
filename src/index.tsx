import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

const rootElement = document.getElementById("root");
render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>,
  rootElement
);
