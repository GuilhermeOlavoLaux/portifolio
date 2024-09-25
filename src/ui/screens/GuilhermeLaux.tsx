import HomeBanner from '@components/home-banner/HomeBanner';
import styles from './GuilhermeLaux.module.css';
import Header from '@components/header/Header';
import Skills from '@components/skills/Skills';
import { Technologies } from '@components/technologies/Technologies';
import { AboutMe } from '@components/about-me/AboutMe';
import { Projects } from '@components/projects/Projects';
import { Footer } from '@components/footer/Footer';

export default function GuilhermeLaux() {
  return (
    <div className={styles.guilherme__laux}>
      <Header />
      <HomeBanner />
      <AboutMe />
      <Technologies />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
