import React from "react";
import "./App.css";
import Form from "./components/Form";

class App extends React.Component {
  state = {
    gameNumber: "",
  };

  passGameNumber = (e, inputGameNumber) => {
    e.preventDefault();
    this.setState({ gameNumber: inputGameNumber });
  };

  render() {
    return (
      <div className="App">
        <Form passGameNumber={this.passGameNumber} />
      </div>
    );
  }
}

export default App;
