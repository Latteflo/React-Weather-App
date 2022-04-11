import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Brussels" />
        <footer>
          This project was coded by Florentina Simion and is{" "}
          <a
            href="https://github.com/Latteflo/React-Weather-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a href="https://jolly-dieffenbachia-9068d8.netlify.app/">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
