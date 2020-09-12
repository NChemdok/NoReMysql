import React from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    axios
      .get("http://localhost:9000/testAPI")
      .then((res) => this.setState({ apiResponse: res.data }));
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    console.log(this.state.apiResponse);
    return (
      <div className="App">
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
