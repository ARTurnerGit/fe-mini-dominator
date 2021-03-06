import React from "react";
import Territory from "./Territory.js";
import { Card } from "@material-ui/core";

function Gamescreen({ territories, map, players, highlighted }) {
  let mapHeight = parseInt(map.height.slice(0, -2));
  let mapWidth = parseInt(map.width.slice(0, -2));
  let containerHeight = 0.95 * window.innerHeight;
  let containerWidth = 0.7 * window.innerWidth;

  let heightSF = containerHeight / mapHeight;
  let widthSF = containerWidth / mapWidth;

  let sf = Math.min(widthSF, heightSF);

  return (
    <Card
      raised={true}
      style={{
        height: `${mapHeight * sf}px`,
        width: `${mapWidth * sf}px`,
        display: "inline-block",
        position: "relative",
      }}
    >
      <img
        src={map.url}
        alt="game map"
        className="map"
        style={{ transform: `scale(${sf})`, transformOrigin: "0 0" }}
      />
      <Territory
        territories={territories}
        sf={sf}
        players={players}
        highlighted={highlighted}
      />
    </Card>
  );
}

export default Gamescreen;
