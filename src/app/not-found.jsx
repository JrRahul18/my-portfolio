"use client";
import React from "react";
import errorImage from "./error404.png";
import styles from "./not-found.module.css";
import Image from "next/image";

const ErrorPage = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.imageBox}>
        <Image src={errorImage} className={styles.image} alt="Error Image"/>
      </div>
      <div className={styles.textBox}>
        <h1 className={styles.heading}>Error!</h1>
        <h3 className={styles.subHeading}>Page Not Found...</h3>
      </div>
    </div>
  );
};

export default ErrorPage;
