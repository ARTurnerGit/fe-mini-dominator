import React from "react";

function Territory({ territories }) {
  return Object.entries(territories).map(([terrName, terrObj]) => {
    return (
      <div
        key={terrName}
        className={`territory ${terrObj.owner}`}
        style={{
          position: "absolute",
          left: terrObj.xpos + "px",
          top: terrObj.ypos + "px",
        }}
      >
        {terrObj.troops}
      </div>
    );
  });
}

export default Territory;
