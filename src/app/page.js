import styles from "./page.module.css";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import AboutMeData from "../../components/Home/AboutMeData/AboutMeData";
import Skills from "../../components/Home/Skills/Skills";
import Technology from "../../components/Home/Technology/Technology";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <div className={styles.appContainer}>
        <HeroSection />
        <AboutMeData/>
        <Technology/>
        <Skills/>

      </div>
    </>
  );
}
