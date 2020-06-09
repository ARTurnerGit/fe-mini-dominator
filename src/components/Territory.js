import React from "react";

function Territory({ territories }) {
  // 795 x 1024px originally
  const height = window.innerHeight;
  const sf = height / 795;
  return Object.entries(territories).map(([terrName, terrObj]) => {
    return (
      <div
        key={terrName}
        className={
          "territory" +
          " " +
          terrObj.owner +
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
