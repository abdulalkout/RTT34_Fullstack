import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
// importing contexts
import DevelopersStoriesContextProvider from "./contexts/storiesContext/DevelopersStoriesContext";
import APIContextProvider from "./contexts/apiContexts/apiContext";
import DevcoopContextProvider from "./contexts/apiContexts/devcoopContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <DevelopersStoriesContextProvider>
        <DevcoopContextProvider>
          <APIContextProvider>
            <App />
          </APIContextProvider>
        </DevcoopContextProvider>
      </DevelopersStoriesContextProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
