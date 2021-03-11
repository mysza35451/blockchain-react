import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <img
            id="logo"
            src={process.env.PUBLIC_URL + "/img/volttoken.png"}
          ></img>
        </h3>
        <p className="footer-links">
          <a href="#">Home</a>·<a href="#">Buy VOLT</a>·<a href="#">Help</a>
        </p>
        <p className="footer-company-name">
          VOLTTOKEN LTD © 2020 Designed and Developed by
          <a href="https://maciejmyszczynski.com/">Maciej Myszczynski</a>
        </p>
        <div className="footer-icons">
          <a href="./index.html">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
      <div id="contact-us" className="footer-right">
        <p>Contact Us</p>
        <form action="#" method="post">
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
