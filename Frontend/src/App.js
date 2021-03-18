import "./App.css";
import Home from "./components/home";
import SignInUp from "./components/signinup";

import React, { Component } from "react";
import {Route, Link} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  
  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }
  
  componentWillMount() {
    this.callAPI();
  }
  
  render(){
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/account" component={SignInUp}/>

    </div>
  );
  }
}

export default App;

// {
//   process.env.PUBLIC_URL + "/img/background.jpg";
// }

