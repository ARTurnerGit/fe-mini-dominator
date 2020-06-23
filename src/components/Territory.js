import React from "react";

function Territory({ territories, sf, players }) {
  return Object.entries(territories).map(([terrName, terrObj]) => {
    return (
      <div
        key={terrName}
        className={
          "territory" +
          " " +
          // (terrObj.owner !== "" && players[`${terrObj.owner}`]["colour"]) +
          " " +
          (terrObj.highlighted && "highlighted")
        }
        style={{
          position: "absolute",
          left: (sf * parseInt(terrObj.xpos, 10)).toString() + "px",
          top: (sf * parseInt(terrObj.ypos, 10)).toString() + "px",
        }}
      >
        {terrObj.troops}
      </div>
    );
  });
}

export default Territory;
