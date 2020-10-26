import React from "react";
import Form from "../components/Form";

function Home({ passGameNumber, haveGameNumber, gameConfirmed }) {
  return (
    <Form
      passGameNumber={passGameNumber}
      haveGameNumber={haveGameNumber}
      gameConfirmed={gameConfirmed}
    />
  );
}

export default Home;
