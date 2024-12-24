import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// Import your components

const Home = lazy(() => import("./Components/Home/Home"));
const About = lazy(() => import("./Components/about/About"));
const Experience = lazy(() => import("./Components/experience/Experience"));
const Work = lazy(() => import("./Components/work/Work"));
const Contact = lazy(() => import("./Components/contact/Contact.jsx"));
const Sidebar = lazy(() => import("./Components/sidebar/Sidebar"));
const Scroll = lazy(() => import("./Components/ScrollUp/Scroll"));
const Notfound = lazy(() => import("./Components/notfound/Notfound"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div
            className="spinner-grow text-danger spinner-grow-lg  "
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    >
      <Sidebar />
      <div className="main">
        <Home />
        <About />
        <Experience />
        <Work />
        <Contact />
        <Scroll />
        {/* <Mode /> */}
      </div>
    </Suspense>
  );
}

export default App;
