import React from "react";
import ImgGrid1 from "../images/img-grid-1.jpg";
import ImgGrid2 from "../images/img-grid-2.jpg";
import ImgGrid3 from "../images/img-grid-3.jpg";
const WeHelpSection = () => {
  return (
    <div className="we-help-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="imgs-grid">
              <div className="grid grid-1">
                <img src={ImgGrid1} alt="Untree.co" />
              </div>
              <div className="grid grid-2">
                <img src={ImgGrid2} alt="Untree.co" />
              </div>
              <div className="grid grid-3">
                <img src={ImgGrid3} alt="Untree.co" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <h2 className="section-title mb-4">
              We Help You Make Modern Interior Design
            </h2>
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada
            </p>

            <ul className="list-unstyled custom-list my-4">
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
            </ul>
            <p>
              <a href="#" className="btn">
                Explore
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeHelpSection;
