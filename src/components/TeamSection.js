import React from "react";
import Person_1_Img from "../images/person-1.jpg";
import Person_2_Img from "../images/person-2.jpg";
import Person_3_Img from "../images/person-3.jpg";
import Person_4_Img from "../images/person-4.jpg";

const TeamSection = () => {
  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="section-title">Our Team</h2>
          </div>
        </div>

        <div className="row">
          {/* Start Column 1 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img
              src={Person_1_Img}
              className="img-fluid mb-5"
              alt="Team Member"
            />
            <h3>
              <a href="#">
                <span className="">Lawson</span> Arnold
              </a>
            </h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mb-0">
              <a href="#" className="more dark">
                Learn More <span className="icon-arrow_forward"></span>
              </a>
            </p>
          </div>
          {/* End Column 1 */}

          {/* Start Column 2 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img
              src={Person_2_Img}
              className="img-fluid mb-5"
              alt="Team Member"
            />

            <h3>
              <a href="#">
                <span className="">Jeremy</span> Walker
              </a>
            </h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mb-0">
              <a href="#" className="more dark">
                Learn More <span className="icon-arrow_forward"></span>
              </a>
            </p>
          </div>
          {/* End Column 2 */}

          {/* Start Column 3 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img
              src={Person_3_Img}
              className="img-fluid mb-5"
              alt="Team Member"
            />
            <h3>
              <a href="#">
                <span className="">Patrik</span> White
              </a>
            </h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mb-0">
              <a href="#" className="more dark">
                Learn More <span className="icon-arrow_forward"></span>
              </a>
            </p>
          </div>
          {/* End Column 3 */}

          {/* Start Column 4 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img
              src={Person_4_Img}
              className="img-fluid mb-5"
              alt="Team Member"
            />

            <h3>
              <a href="#">
                <span className="">Kathryn</span> Ryan
              </a>
            </h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mb-0">
              <a href="#" className="more dark">
                Learn More <span className="icon-arrow_forward"></span>
              </a>
            </p>
          </div>
          {/* End Column 4 */}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
