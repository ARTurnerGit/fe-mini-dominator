import React from "react";
import Territory from "./Territory.js";

function Gamescreen({ territories, map, players }) {
  let mapHeight = parseInt(map.height.slice(0, -2));
  let windowHeight = window.innerHeight;
  let sf = windowHeight / mapHeight;

  return (
    <div className="map-container">
      <img src={map.url} alt="game map" className="map" />
      <Territory territories={territories} sf={sf} players={players} />
    </div>
  );
}

export default Gamescreen;
