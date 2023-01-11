import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Category from "./Category";
import Project from "./Project";

const Projects = () => {
  const locate = useLocation();
  const { from } = locate.state;
  console.log(from);
  return (
    <>
      <div>ALL Categories {from.name}</div>
      <Project value={from.name} />
    </>
  );
};

export default Projects;
