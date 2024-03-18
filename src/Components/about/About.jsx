import React from "react";
import "../about/about.css";
import { saveAs } from "file-saver";
import { Fade, Roll, Slide } from "react-awesome-reveal";
import localPdfFile from "../../assets/resume.pdf"; // Import your PDF file

function About() {
  const handleDownloadCV = async () => {
    saveAs(localPdfFile, "Mahmoud Khairy CV.pdf");
  };

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

            <div
              className="content d-flex align-items-center justify-content-between row col-sm-12 col-md-8"
              style={{ minHeight: "400px" }}
            >
              <div className="info cok-12 col-md-6">
                <p
                  className="about-me"
                  style={{
                    maxHeight: "200px",
                    overflow: "scroll",
                    textAlign: "left",
                  }}
                >
                  As a dynamic and fresh frontend developer, I specialize in
                  crafting engaging user interfaces using ReactJS. With over a
                  year of hands-on experience, I am deeply passionate about
                  creating dynamic user experiences and adept at leveraging
                  media queries for responsive design. My keen eye for detail
                  ensures pixel-perfect execution, while my commitment to
                  continuous learning drives me to stay updated with the latest
                  trends and techniques. I have practical experience working
                  with Figma for design collaboration and Next.js for building
                  powerful web applications. Additionally, my proficiency in
                  server-side rendering (SSR) and SEO optimization further
                  enhances my ability to deliver high-performance websites. With
                  a strong foundation in ReactJS and a knack for
                  problem-solving, I am poised to collaborate with you to bring
                  your digital projects to life with innovation and efficiency.
                  Let's join forces and create something extraordinary together!
                </p>
                <div className="butn  " onClick={handleDownloadCV}>
                  Download Cv
                </div>
              </div>
              <div className="bars col-12 col-md-5 mt-sm-5 mt-0">
                <div className="Frontend mb-5">
                  <h6>Frontend</h6>
                  <div className="bar ">
                    <Slide duration={1000} direction="left" delay={200}>
                      <span className="after"></span>
                    </Slide>
                  </div>
                </div>
                <div className="UI mb-5">
                  <h6>UI/UX</h6>
                  <div className="bar">
                    <Slide duration={1000} direction="left" delay={200}>
                      <span className="after"></span>
                    </Slide>
                  </div>
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
