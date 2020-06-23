import React from "react";
import Territory from "./Territory.js";

function Gamescreen({ territories, map }) {
  let mapHeight = parseInt(map.height.slice(0, -2));
  let windowHeight = window.innerHeight;
  let sf = windowHeight / mapHeight;

  return (
    <div className="map-container">
      <img src={map.url} alt="game map" className="map" />
      <Territory territories={territories} sf={sf} />
    </div>
  );
}

export default Gamescreen;
