import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Brussels" />
        <footer>
         This app was created by Florentina Simion ©, as part of her SheCodes React final projects.
         <br/>
         {" "}Open-sourced on{" "}
          <a
            href="https://github.com/Latteflo/React-Weather-App"
            target="_blank"
            rel="noopener noreferrer">
          Github
          </a>{" "}|{" "}
          <a href="https://jolly-dieffenbachia-9068d8.netlify.app/">
            Hosted on Netlify
          </a>{" "}|{" "}
             Weather icons by 
             <a href="https://basmilius.github.io/weather-icons/index-line.html"
             target="_blank"  
             rel="noopener noreferrer"
             > Basmilius </a>.
        </footer>
      </div>
    </div>
  );
}

export default App;
