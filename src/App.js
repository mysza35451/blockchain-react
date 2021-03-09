import "./App.css";
import Navbar from "./components/navbar";
import Welcome from "./components/welcome";
import React from "react";

function App() {
  return (
    <div className="website-content">
      <Navbar />
      <Welcome />
    </div>
  );
}

export default App;

// {
//   process.env.PUBLIC_URL + "/img/background.jpg";
// }
