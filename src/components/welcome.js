import React from "react";
import "../css/welcome.css";

function Welcome() {
  return (
    <div className="welcome-container">
      <div id="welcome-img-sun">
        <img src={process.env.PUBLIC_URL + "/img/sun.png"}></img>
      </div>
      <div className="text-set">
        <h1>The revolution of Solar Panel Technology is here!</h1>
        <p>
          Discover the modernized blockchain system that allows you to profit
          from the electricity you produce.
        </p>

        <button>Discover...</button>
      </div>
    </div>
  );
}
export default Welcome;
