'use client'
import React from "react";
import styles from "./Skills.module.css";
import ProgressCard from "./ProgressCard";

const Skills = () => {
  const skillsDataArray = [
    { name: "Java", ratings: 90 },
    { name: "HTML", ratings: 88 },
    { name: "CSS", ratings: 80 },
    { name: "Javascript", ratings: 70 },
    { name: "ReactJS", ratings: 70 },
    { name: "Node.js", ratings: 70 },
    { name: "C++", ratings: 60 },
  ];
  return (
    <div className={styles.outerContainer}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>My Skills</h1>
      </div>
      <div className={styles.skillsContainer}>
        {skillsDataArray.map((skill, index)=>{
            return(<ProgressCard key={index} name = {skill.name} rate = {skill.ratings}/>)
        })}
        {/* <ProgressCard /> */}
      </div>
    </div>
  );
};

export default Skills;
