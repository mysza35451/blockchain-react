import "./App.css";
import Home from "./components/home";
import SignInUp from "./components/signinup";

import React from "react";
import {Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/account" component={SignInUp}/>

    </div>
  );
}

export default App;

// {
//   process.env.PUBLIC_URL + "/img/background.jpg";
// }
