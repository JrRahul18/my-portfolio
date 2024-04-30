"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ProgressCard.module.css";

const ProgressCard = ({ name, rate }) => {
  const[isVisible, setIsVisible]=useState(false)
  const elementRef = useRef(null)


  const [screenWidth, setScreenWidth] = useState(2000);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    if (typeof window !== "undefined") {
      const resizeHandler = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", resizeHandler);

      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    }
  }, [screenWidth]);

  useEffect(()=>{
    const observer = new IntersectionObserver(([entry])=>{
      setIsVisible(entry.isIntersecting);
      if(entry.isIntersecting){
        observer.unobserve(elementRef.current)
      }
    }, {threshold: 0.1})

    if(elementRef.current){
      observer.observe(elementRef.current)
    }
    return()=>{
      if(elementRef.current){
        observer.unobserve(elementRef.current)
      }
    }
  },[])



  const strokeDashOffset =
    screenWidth <= 800
      ? Math.floor(337 - 337 * (rate / 100) + 440)
      : Math.floor(440 - 440 * (rate / 100));
  return (
    <div  className={styles.skillCard}>
      <div className={styles.progressCircle}>
        <div className={styles.outerCircle}>
          <div className={styles.innerCircle}>
            <p className={styles.skillRate}>{rate}<span className={styles.span}>%</span></p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className={styles.svg}
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="30%" stopColor="#C1D950" />
              <stop offset="100%" stopColor="#59A6A1" />
            </linearGradient>
          </defs>
          <circle ref={elementRef}
            cx="80"
            cy="80"
            r="70"
            strokeLinecap="round"
            className={`${styles.circle} ${isVisible ? styles.visibleAnimation : ''}`}
            style={{ "--dash-offset": strokeDashOffset }}
          />
        </svg>
      </div>
      <div className={styles.skillNameBox}>
        <h2 className={styles.skillName}>{name}</h2>
      </div>
    </div>
  );
};

export default ProgressCard;
