import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import Home from "./pages/Home/Home";
import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";

/** Get your free Moralis Account https://moralis.io/ */

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <MoralisDappProvider>
          <App isServerInfo />
        </MoralisDappProvider>
      </MoralisProvider>
    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Home />
      </div>
    );
  }
};

ReactDOM.render(
  // <React.StrictMode>
  <Application />,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();