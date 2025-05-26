import React from "react";
import humanBodyImg from "../assets/human-body.png";
import "../styles/AnatomySection.css";

const AnatomySection = () => {
  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-10 col-12">
          <div className="card anatomy-card text-center">
            <div className="anatomy-container position-relative mx-auto">
              <img
                src={humanBodyImg}
                alt="Anatomy"
                className="img-fluid anatomy-img"
              />

              {/* Healthy Heart Badge */}
              <div className="badge-container heart">
                <i className="fa fa-heart me-1 text-danger"></i>
                Healthy Heart
              </div>

              {/* Healthy Leg Badge */}
              <div className="badge-container leg">
                <i className="fa fa-walking me-1 text-white"></i>
                Healthy Leg
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
