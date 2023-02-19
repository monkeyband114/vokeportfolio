import React from "react";
// import "./App.css";
import { Top } from "./components";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Project from "./components/Projects/Project";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />}></Route>
      <Route path="projects" element={<Projects />}>
        <Route path=":projectId" element={<Project />} />
      </Route>
    </Routes>
  );
};

export default App;
