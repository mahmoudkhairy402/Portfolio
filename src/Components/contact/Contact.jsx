import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../contact/contact.css";
import Lottie from "lottie-react";
import doneAnimation from "../../animations/done.json";
import loadingAnimation from "../../animations/loading.json";
import contactAnimation from "../../animations/contact.json";
function contact() {
  const [state, handleSubmit] = useForm("xdorvppw");
  return (
    <>
      <div className="main-title" id="contact">
        contact me
      </div>
      <p className="title">
        your opinion is important for me , give me your feedback please
      </p>
      <div className="container">
        <div className="contact row d-flex align-items-center justify-content-center">
          <form
            onSubmit={handleSubmit}
            action=""
            className="form col-md-12 col-lg-6"
          >
            <div id="email">
              <label className="col-3" htmlFor="email">
                Email
              </label>
              <input
                autoComplete="off"
                required
                id="email"
                type="email"
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="textarea">
              <label className="col-3" htmlFor="message">
                your message
              </label>
              <textarea
                required
                className="textarea"
                id="message"
                name="message"
                rows="3"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              className="submit btn btn-danger"
              disabled={state.result || state.submitting}
            >
              {state.submitting ? (
                <p className="m-0 d-flex align-items-center">
                  <Lottie
                    loop={true}
                    style={{ maxWidth: "55px" }}
                    animationData={loadingAnimation}
                  />
                  <p style={{ margin: "0" }}> submit</p>
                </p>
              ) : (
                "submit"
              )}
            </button>

            {state.succeeded ? (
              <p className="text-success mt-2 d-flex align-items-center">
                <Lottie
                  loop={false}
                  style={{ maxWidth: "55px" }}
                  animationData={doneAnimation}
                />
                <p style={{ margin: "0" }}>
                  {" "}
                  your message have been sent succesfully
                </p>
              </p>
            ) : null}
          </form>
          <div className="image d-none d-lg-block col-md-6">
            <Lottie
              loop={true}
              // style={{ maxWidth: "55px" }}
              animationData={contactAnimation}
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default contact;
