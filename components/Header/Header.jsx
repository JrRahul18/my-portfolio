'use client'

import React, { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";




const Header = () => {
  const [navIndex, setNavIndex]=useState(null)
  const navItems = [{navName: "Home", navPath: "/"}, {navName: "About Me", navPath: "/about-me"}, {navName: "Projects", navPath: "/projects"}, {navName: "Contact Me", navPath: "/contact-me"}]
  const sidebarHandler = () =>{
    const newNavSelector = document.getElementById("newNav");
    newNavSelector.classList.toggle(styles.active);
  }
  const navItemHandler = (idx) =>{
    setNavIndex(idx);
  }
  const scrollTopHandler = () =>{
    window.scrollTo(0, 0)
  }
  return (
    <>
    <header className={styles.headerBox}>
      <nav className={styles.navBox}>
        <ul className={styles.unorderedList}>
          {navItems.map((item, index) => {
            return (
              <li key={index} onClick={()=>{navItemHandler(index); scrollTopHandler();}} className={`${styles.listItem} ${navIndex === index ? styles.active : ""}`}>
                <Link href={item.navPath} scroll={false} className={styles.link}>
                  <span>{item.navName}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        
      </nav>
      <FiMenu className={styles.hamburgerButton} onClick={sidebarHandler}/>
      <nav id="newNav" className={styles.newNavBox}>
      <IoIosClose  className={styles.crossButton} onClick={sidebarHandler}/>

        <ul className={styles.newUnorderedList}>

          {navItems.map((item, index)=>{
            return(<li key={index} onClick={()=>{scrollTopHandler()}}  className={styles.newListItem}>
              <Link href={item.navPath} scroll={false} className={styles.newLink} onClick={()=>{sidebarHandler();navItemHandler(index); scrollTopHandler()}}>
                <span>{item.navName}</span>
              </Link>
            </li>)
          })}
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;
