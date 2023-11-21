import React from "react";
import "../experience/experience.css";
import { Fade } from "react-awesome-reveal";
function Experience() {
  return (
    <>
      <div className="main-title" id="experience">
        Experience
      </div>
      <Fade duration={2000}>
        <div className="container experience  d-flex justify-content-center align-items-center">
          <div className="row justify-content-between align-items-center gap-sm-1">
            <div className="experience-information col-12 col-md-6">
              <div className="ex-card">
                <svg
                  id="svg-icon-ex"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-mortarboard"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                </svg>
                <p className="year">2023 present</p>
                <h2 className="title">academic degree</h2>
                <p className="ex-info">
                  I am currently a fourth-year Computer Science student at Suez
                  Canal University, pursuing my Bachelor's degree.
                </p>
              </div>
              <div className="ex-card">
                <svg
                  id="svg-icon-ex"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-mortarboard"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                </svg>
                <p className="year">2019 - 2023</p>
                <h2 className="title">bachelor`s degree</h2>
                <p className="ex-info">
                  I hold a Bachelor's degree in Computer Science from Suez Canal
                  University, specializing in areas such as algorithms, software
                  engineering, and database management
                </p>
                <p className="ex-info">
                  During my four-year degree program, I completed notable
                  projects in web development, participated in group software
                  engineering projects
                </p>
              </div>
            </div>

            <div className="experience-information col-12 col-md-5">
              <div className="ex-card">
                <svg
                  id="svg-icon-ex"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-briefcase"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                </svg>

                <p className="year">2019 - 2023 present</p>
                <h2 className="title">front-End developer</h2>
                <p className="ex-info">
                  Proficient in web development technologies including HTML,
                  CSS, Bootstrap, and Sass, with a keen eye for responsive
                  design and user-friendly interfaces{" "}
                </p>
                <p className="ex-info">
                  Experienced in building dynamic and interactive web
                  applications using React.js, harnessing the power of
                  component-based architecture to create engaging user
                  experiences.
                </p>
              </div>
              <div className="ex-card">
                <svg
                  id="svg-icon-ex"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-briefcase"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                </svg>
                <p className="year">2019-2021</p>
                <h2 className="title">UI/UX Designing</h2>
                <p className="ex-info">
                  Adept in UI/UX design principles, with a strong foundation in
                  creating visually appealing and intuitive user interfaces that
                  enhance the user experience.
                </p>
                <p className="ex-info">
                  Proficiency in crafting user-centered designs that emphasize
                  usability, wireframing, prototyping, and user testing,
                  ensuring that every project delivers a seamless and engaging
                  interaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default Experience;
