import React from 'react'
import styles from "./Footer.module.css"
import Link from 'next/link'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";





const Footer = () => {
  return (
    <div className={styles.outerContainer}>
        <div className={styles.box1}>
            <h2 className={styles.heading}>Connect on Socials</h2>
            <div className={styles.smIcons}>
                <Link href={"https://www.linkedin.com/in/rahul-jeena-941a18201/"} target='_blank' className={styles.iconLink}><FaLinkedin className={styles.icon}/></Link>
                <Link href={"https://www.instagram.com/rahul_jeena_18/"} target='_blank' className={styles.iconLink}><FaInstagramSquare className={styles.icon}/></Link>
                <Link href={"https://www.facebook.com/rahul.jeena.16/"} target='_blank' className={styles.iconLink}><FaSquareFacebook className={styles.icon}/></Link>
                <Link href={"https://twitter.com/18RahulJ"} target='_blank' className={styles.iconLink}><FaSquareXTwitter className={styles.icon}/></Link>
            </div>
        </div>
        <hr className={styles.hr}/>
        <div className={styles.box2}>
            <p className={styles.copyright}>&copy; 2023 Rahul Jeena,  All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer