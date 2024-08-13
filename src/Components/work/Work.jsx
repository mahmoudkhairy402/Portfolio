import React, { useState } from "react";
import "../work/work.css";
import { Bounce } from "react-awesome-reveal";
import { myProjects } from "../../myProjects";

function Work() {
  const [activeLink, setActiveLink] = useState("");
  const [projectsArr, setProjectsArr] = useState(myProjects);

  let fiterMyProjects = (cat) => {
    let filteredArr = myProjects.filter((ele) => {
      let innerFilterArr = ele.category.filter((category) => {
        return category === cat;
      });
      return innerFilterArr.length > 0;
    });

    setProjectsArr(filteredArr);
    console.log(
      "🚀 ~ file: Work.jsx:40 ~ fiterMyProjects ~ filteredArr:",
      filteredArr
    );
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className="main-title" id="work">
        my work
      </div>
      <div className="row work">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li
              className={`breadcrumb-item category-all  ${
                activeLink === "all" ? "active" : ""
              }`}
              onClick={() => {
                handleLinkClick("all");
                setProjectsArr(myProjects);
              }}
              aria-current="page"
            >
              All
            </li>
            <li
              className={`breadcrumb-item category-item ${
                activeLink === "css" ? "active" : ""
              }`}
              onClick={() => {
                handleLinkClick("css");
                fiterMyProjects("css");
              }}
              aria-current="page"
            >
              Css
            </li>
            <li
              className={`breadcrumb-item category-item ${
                activeLink === "bootstrap" ? "active" : ""
              }`}
              onClick={() => {
                handleLinkClick("bootstrap");
                fiterMyProjects("bootstrap");
              }}
              aria-current="page"
            >
              bootstrap
            </li>
            <li
              className={`breadcrumb-item category-item ${
                activeLink === "sass" ? "active" : ""
              }`}
              onClick={() => {
                handleLinkClick("sass");
                fiterMyProjects("sass");
              }}
              aria-current="page"
            >
              sass
            </li>
            <li
              className={`breadcrumb-item category-item ${
                activeLink === "redux" ? "active" : ""
              }`}
              onClick={() => {
                handleLinkClick("redux");
                fiterMyProjects("redux");
              }}
              aria-current="page"
            >
              Redux
            </li>

            <li
              className={`breadcrumb-item category-item ${
                activeLink === "javascript" ? "active" : ""
              }`}
              onClick={() => {
                handleLinkClick("javascript");
                fiterMyProjects("javascript");
              }}
              aria-current="page"
            >
              Javascript
            </li>
            <li
              className={`breadcrumb-item category-item ${
                activeLink === "react" ? "active" : ""
              }`}
              onClick={() => {
                handleLinkClick("react");
                fiterMyProjects("react");
              }}
              aria-current="page"
            >
              React js
            </li>
            <li
              className={`breadcrumb-item category-item ${
                activeLink === "team" ? "active" : ""
              }`}
              onClick={() => {
                handleLinkClick("team");
                fiterMyProjects("team");
              }}
              aria-current="page"
            >
              Team
            </li>
          </ol>
        </nav>

        <div className=" row mt-3 gy-4 justify-content-around align-items-center">
          {projectsArr.map((ele) => {
            return (
              <Bounce duration={1000} className="w-auto">
                <div
                  key={ele.projectName}
                  className="card col-12 col-md-6 col-lg-3"
                >
                  <div className="card-content">
                    <div className="image">
                      {ele.projectImg && (
                        <img src={ele.projectImg} alt="" srcSet="" />
                      )}
                    </div>
                    <div className="content">
                      <h5 className="project-title">{ele.projectName}</h5>
                      <p className="project-desc">{ele.projectDesc}</p>
                      <div className="links">
                        {/* //! handeling function to copy the link */}
                        <a href={ele.projectLink}>
                          <svg
                            id="links-icon "
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-link"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                          </svg>
                        </a>

                        <a href={ele.rebo}>
                          <svg
                            id="links-icon "
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-github"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                          </svg>
                        </a>
                        <a href={ele.rebo} className="more-link">
                          more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blob"></div>
                </div>
              </Bounce>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Work;
