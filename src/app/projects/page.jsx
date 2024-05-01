"use client";
import React from "react";
import styles from "./projects.module.css";
import projectDataArray from "./projectData";
import ProjectCard from "./ProjectCard";
import Head from "next/head";

const Projects = () => {
  return (
    <>
    <Head>
      <title>My Projects</title>
    </Head>
      <div className={styles.outerContainer}>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>My Projects</h1>
        </div>
        <div className={styles.projectContainer}>
          {projectDataArray.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
