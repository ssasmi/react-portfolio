import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Bio from "../../pages/Profile/Bio";
import Projects from "../../pages/Projects";
// import Contact from "../portfolio-content/Contact";
// import Login from "../portfolio-content/Login";
// import Resume from "../portfolio-content/Resume";
import Error from "./Error";

export default function Content({ setSelectedIndex }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Bio setSelectedIndex={setSelectedIndex} />
        }
      />
      <Route path="/projects" element={<Projects />} />
      {/* <Route path="/resume" element={<Resume />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact btnSound />} /> */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
