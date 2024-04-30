"use client";
import React from "react";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import { TbPointFilled } from "react-icons/tb";
import Link from "next/link";


const ProjectCard = ({ project }) => {
  return (
    <Link href={"/"} className={styles.projectCard}>
      <Image src={project.img} className={styles.image} alt={project.name}/>
      <div className={styles.projectInfoBox}>
        <p className={styles.projectName}>{project.name}</p>
        <div className={styles.descriptionBox}>
          <p className={styles.mainDescription}>{project.mainDescription}</p>
          {project.description.map((point, index) => {
            return (
              <div key={index} className={styles.pointData}>
                <div className={styles.pointBullets}><TbPointFilled/></div>
                <p className={styles.point}>{point}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
