import React from "react";

function Iframe({ gameNumber }) {
  return (
    <iframe
      src={`http://www.dominating12.com/game/${gameNumber}`}
      className="iframe"
      id="iframe"
      title="check-game"
    ></iframe>
  );
}

export default Iframe;
