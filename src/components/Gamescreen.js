import React from "react";
import Territory from "./Territory.js";

function Gamescreen({ territories, playNextInLog }) {
  return (
    <div className="map-container" onClick={playNextInLog}>
      <img
        src="https://dominating12.com/assets/img/maps/72.large.jpg"
        alt="a map of Greece"
        className="map"
      />
      <Territory territories={territories} />
    </div>
  );
}

export default Gamescreen;
