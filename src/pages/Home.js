import React from "react";
import Form from "../components/Form";

function Home({
  passGameNumber,
  extractGameData,
  haveGameNumber,
  gameConfirmed,
}) {
  return (
    <Form
      passGameNumber={passGameNumber}
      extractGameData={extractGameData}
      haveGameNumber={haveGameNumber}
      gameConfirmed={gameConfirmed}
    />
  );
}

export default Home;
