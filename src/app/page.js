import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import AboutMeData from "../../components/Home/AboutMeData/AboutMeData";
import Skills from "../../components/Home/Skills/Skills";
import Technology from "../../components/Home/Technology/Technology";


export default function Home() {
  return (
    <>
      
      <div className={styles.appContainer}>
        <HeroSection />
        <AboutMeData/>
        <Technology/>
        <Skills/>

      </div>
    </>
  );
}
