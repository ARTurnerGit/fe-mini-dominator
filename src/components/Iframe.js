import React from "react";

function Iframe({ gameNumber }) {
  const url = `http://www.dominating12.com/game/${gameNumber}`;
  console.log(`url is ${url}`);
  return (
    <iframe
      src={url}
      className="iframe"
      id="iframe"
      title="check-game"
    ></iframe>
  );
}

export default Iframe;
