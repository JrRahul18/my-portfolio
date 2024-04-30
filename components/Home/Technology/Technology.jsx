"use client";
import React, { useState } from "react";
import styles from "./Technology.module.css";
import Image from "next/image";
import { imageArray } from "./TechnologyImage";
import background from "./images/background.jpeg"

const Technology = () => {
  const [isHovered, setIsHovered] = useState(null);

  const mouseEnterHandler = (index) => {
    setIsHovered(index);
  };
  const mouseLeaveHandler = () => {
    setIsHovered(null);
  };
  return (
    <div className={styles.outerContainer}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>Technologies</h1>
        <h3 className={styles.subHeading}>that I have worked with</h3>
      </div>
      <div className={styles.techContainer}>
        {imageArray.map((image, index) => {
          return (
            <div key={index} className={styles.imageBox}>
              <div className={styles.logoContainer}>
                <Image
                  className={styles.techLogo}
                  src={image.img}
                  onMouseEnter={() => {
                    mouseEnterHandler(index);
                  }}
                  onMouseLeave={mouseLeaveHandler}
                  alt={image.name}
                />
              </div>
              {isHovered === index && (
                <div className={styles.tooltipBox}>
                  <p className={styles.techName}>{image.name}</p>
                </div>
              )}
            </div>
          );
        })}
        {/* <Image src={techArray[0]} width={200} height={200} alt="THis image"/> */}
      </div>
    </div>
  );
};

export default Technology;
