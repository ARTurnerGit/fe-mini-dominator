import React from "react";

// headscratcher: territories, when logged, shows all territories have the key of owner, some of which are empty strings. Line 12 only works correctly when in it's current form. Won't work if check terrObj.owner !== "" for some reason. Why is this?

function Territory({ territories, sf, players, highlighted }) {
  return Object.entries(territories).map(([terrName, terrObj]) => {
    return (
      <div
        key={terrName}
        className={
          "territory " +
          (players[terrObj.owner] !== undefined
            ? `${players[terrObj.owner].colour} `
            : "") +
          (highlighted.includes(terrName) ? "highlighted" : "")
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
