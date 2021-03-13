import Navbar from "./navbar";
import Welcome from "./welcome";
import InfoBoxes from "./info-boxes";
import Footer from "./footer";
import Latest from "./blog";

import React from "react";

function Home() {
  return (
    <div className="website-content">
      <Navbar />
      <Welcome />
      <div className="page-contents">
        <InfoBoxes />
        <Latest />
      </div>
      <Footer />
    </div>
  );
}

export default Home;