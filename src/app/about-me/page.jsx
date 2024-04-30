"use client";
import React from "react";
import styles from "./AboutMeData.module.css";
import Image from "next/image";
import AboutMeImage from "./images/AboutMeImage.png";
import leetcodeIcon from "./images/leetcode.png"
import gfgIcon from "./images/gfg.png"
import githubIcon from "./images/github.png"
import { FaHandPointRight } from "react-icons/fa";
import Link from "next/link";

const AboutMeData = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>About Me</h1>
      </div>
      <div className={styles.dataBox}>
        <div className={styles.box1}>
          <Image
            src={AboutMeImage}
            className={styles.AboutMeImage}
            alt="About Me Image"
          />
        </div>
        <div className={styles.box2}>
          <div className={styles.myDataBox}>
            <div className={styles.myData}>
              <div className={styles.listIconBox}>
                <FaHandPointRight className={styles.listIcon} />
              </div>
              <p className={styles.textPoint}>
                Myself Rahul Jeena, graduated from IIIT-Delhi.{" "}
              </p>
            </div>
            <div className={styles.myData}>
              <div className={styles.listIconBox}>
                <FaHandPointRight className={styles.listIcon} />
              </div>
              <p className={styles.textPoint}>
                Pursued <span className={styles.highlight}>BTech.</span> in
                Computer Science and Social Science(CSSS).
              </p>
            </div>
            <div className={styles.myData}>
              <div className={styles.listIconBox}>
                <FaHandPointRight className={styles.listIcon} />
              </div>
              <p className={styles.textPoint}>
                Code Geek - Core programming language is{" "}
                <span className={styles.highlight}>JAVA</span>
              </p>{" "}
            </div>
            <div className={styles.myData}>
              <div className={styles.listIconBox}>
                <FaHandPointRight className={styles.listIcon} />
              </div>
              <p className={styles.textPoint}>
                Data Structures and Algorithms enthusiast.
              </p>{" "}
            </div>
            <div className={styles.myData}>
              <div className={styles.listIconBox}>
                <FaHandPointRight className={styles.listIcon} />
              </div>
              <p className={styles.textPoint}>Worked on Full Stack websites.</p>
            </div>
            <div className={styles.myData}>
              <div className={styles.listIconBox}>
                <FaHandPointRight className={styles.listIcon} />
              </div>
              <p className={styles.textPoint}>
                Frontend Proficiency:{" "}
                <span className={styles.highlight}>ReactJS</span>,{" "}
                <span className={styles.highlight}>Next.js</span>
              </p>
            </div>
            <div className={styles.myData}>
              <div className={styles.listIconBox}>
                <FaHandPointRight className={styles.listIcon} />
              </div>
              <p className={styles.textPoint}>
                Backend Proficiency:{" "}
                <span className={styles.highlight}>Node.js</span>,{" "}
                <span className={styles.highlight}>Expressjs</span>
              </p>
            </div>
            <div className={styles.myData}>
              <div className={styles.codingBox}>
              <Link href={"https://github.com/JrRahul18"} target="_blank" className={styles.codingLink}>
                  <Image src={githubIcon} className={styles.codingLogo}/>
                  <p className={styles.codingName}>Github Profile</p>
                </Link>
                <Link href={"https://leetcode.com/u/18_rahul/"} target="_blank" className={styles.codingLink}>
                  <Image src={leetcodeIcon} className={styles.codingLogo}/>
                  <p className={styles.codingName}>Leetcode Profile</p>
                </Link>
                <Link href={"https://www.geeksforgeeks.org/user/rahuljeena16/"} target="_blank" className={styles.codingLink}>
                  <Image src={gfgIcon} className={styles.codingLogo}/>
                  <p className={styles.codingName}>GFG Profile</p>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeData;
