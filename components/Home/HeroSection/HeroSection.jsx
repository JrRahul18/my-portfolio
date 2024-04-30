"use client";
import React from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import ProfileImage from "./ProfileImage2.jpg";
import { FaComputer } from "react-icons/fa6";
import { SiHey } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const HeroSection = () => {
  const [text] = useTypewriter({
    words: ['Software Developer.', 'Web Developer.'],
    loop:{},
    typeSpeed: 70,
    deleteSpeed: 60,
    delaySpeed: 2000
  })
  return (
    <div className={styles.outerContainer}>
      <div className={styles.box1}>
        <div className={styles.iconBox1}>
        <SiHey className={styles.icons}/>

        </div>
        <h3>Hi, myself</h3>
        <h1>RAHUL JEENA</h1>
        <h2> I&apos;m a <span className={styles.typewriter} style={{fontFamily: 'var(--font-family-2)'} } >{text}</span> <Cursor/> </h2>
        <div className={styles.iconBox2}>
        <FaComputer className={styles.icons}/>

        </div>
        <div className={styles.buttonContainer}>
          <Link target="_blank" href="./Rahul_Resume.pdf" className={styles.link1}>
            <FiDownload className={styles.buttonIcons}/>
            <span>Download CV</span>
            </Link>
          <Link target="_blank" href= {'https://wa.me/+918130902286'}  className={styles.link2}>
            <FaWhatsapp className={styles.buttonIcons}/>
          <span>Whatsapp Me</span>
          </Link>
        </div>
      </div>
      <div className={styles.box2}>
        <Image className={styles.myImage} src={ProfileImage} alt='My Image'/>
      </div>
    </div>
  );
};

export default HeroSection;
