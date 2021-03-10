import React from "react";
import "../css/info-boxes.css";

function InfoBoxes() {
  return (
    <div className="info-boxes">
      <div className="box">
        <img
          className="line-box-img-1"
          src={process.env.PUBLIC_URL + "/img/line.svg"}
        ></img>
        <img
          className="line-box-img-2"
          src={process.env.PUBLIC_URL + "/img/line.svg"}
        ></img>
        <div className="text-box-container">
          <img src={process.env.PUBLIC_URL + "/img/electricity.png"}></img>
          <h1>Sell the Electricity!</h1>
          <p>
            Turn the excess power generated into VoltToken, and redeem it or
            sell it!
          </p>
        </div>
      </div>

      <div className="box">
        <img
          className="line-box-img-1"
          src={process.env.PUBLIC_URL + "/img/line.svg"}
        ></img>
        <img
          className="line-box-img-2"
          src={process.env.PUBLIC_URL + "/img/line.svg"}
        ></img>
        <div className="text-box-container">
          <img src={process.env.PUBLIC_URL + "/img/environment.png"}></img>
          <h1>Help the environment!</h1>
          <p>
            We promote solar energy and electric cars, join us on the journey to
            reduce CO2 levels! You can exchange tokens for car charges.
          </p>
        </div>
      </div>

      <div className="box">
        <img
          className="line-box-img-1"
          src={process.env.PUBLIC_URL + "/img/line.svg"}
        ></img>
        <img
          className="line-box-img-2"
          src={process.env.PUBLIC_URL + "/img/line.svg"}
        ></img>
        <div className="text-box-container">
          <img src={process.env.PUBLIC_URL + "/img/sun2.png"}></img>
          <h1>It shines all day!</h1>
          <p>
            Even when you are working long shifts the sun doesn't stop to shine!
            Why not benefit
          </p>
        </div>
      </div>

      <div className="box">
        <img
          className="line-box-img-1"
          src={process.env.PUBLIC_URL + "/img/line.svg"}
        ></img>
        <img
          className="line-box-img-2"
          src={process.env.PUBLIC_URL + "/img/line.svg"}
        ></img>
        <div className="text-box-container">
          <img src={process.env.PUBLIC_URL + "/img/code.png"}></img>
          <h1>Contribute by Coding</h1>
          <p>
            We are growing as you are reading this, but we cannot do it alone...
            Join us on the journey of changing the environment!
          </p>
        </div>
      </div>
    </div>
  );
}
export default InfoBoxes;
