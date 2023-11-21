import React from "react";
import "../about/about.css";
import {
  Bounce,
  Fade,
  Hinge,
  JackInTheBox,
  Roll,
  Rotate,
  Zoom,
} from "react-awesome-reveal";

function About() {
  return (
    <>
      <div className="main-title" id="about">
        about me
      </div>
      <div className=" about container d-flex justify-content-center align-items-center">
        <Fade duration={1000}>
          <div className=" row  m-0  align-items-center justify-content-around">
            <Roll
              duration={1000}
              direction="right"
              delay={200}
              className="image col-sm-12 col-md-3"
            >
              <img src={require("../../Images/portfolio.png")} alt="" />
            </Roll>

            <div className="content row col-sm-12 col-md-7">
              <div className="info col-5">
                <p className="about-me">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat voluptatem voluptates perferendis vero est modi
                  corrupti quae ratione, voluptate maxime veritatis ad optio
                  odit ipsa dignissimos
                </p>
                <div className="download-cv btn btn-danger">Download Cv</div>
              </div>
              <div className="bars col-7">
                <div className="Frontend">
                  <h6>Frontend</h6>
                  <div className="bar"></div>
                </div>
                <div className="UI">
                  <h6>UI/UX</h6>
                  <div className="bar"></div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default About;
