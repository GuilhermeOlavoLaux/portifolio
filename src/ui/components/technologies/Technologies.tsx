import styles from './Technologies.module.css';
import TechnologieCarousel from '@components/technologie-carrousel/TechnologieCarousel';
import TechnologieCard from '@components/technologie-card/TechnologieCard';
import FrontEnd from '@assets/images/front-end.png';
import BackEnd from '@assets/images/back-end.png';
import Others from '@assets/images/others.png';
import React from 'react';

interface CardType {
  key: number;
  content: React.ReactNode;
}

export function Technologies() {
  const cards: CardType[] = [
    {
      key: 0,
      content: (
        <TechnologieCard>
          <img
            src={FrontEnd}
            alt=""
            className={styles.technologie_card__image}
          />
          <h2 className={styles.technologie_card__title}>
            Desenvolvimento Front End
          </h2>
          <p className={styles.technologie_card__description}>
            Possuo mais de 2 anos experiencia como desenvolvedor front end,
            utilizando as seguintes tecnologias:
          </p>

          <h3 className={styles.technologie_card__languages}>Linguagens</h3>
          <p>JavaScript, TypeScript e PhP</p>

          <h3 className={styles.technologie_card__dev__tools}>Dev Tools</h3>

          <div className={styles.technologie_card__list}>
            <ul>
              <li>React</li>
              <li>NextJS</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SCSS</li>
              <li>UX/UI</li>
            </ul>

            <ul>
              <li>Figma</li>
              <li>CI/CD</li>
              <li>APIS</li>
              <li>StoryBook</li>
              <li>Cucumber</li>
              <li>Jest</li>
            </ul>
          </div>
        </TechnologieCard>
      ),
    },
    {
      key: 1,
      content: (
        <TechnologieCard>
          <img
            src={BackEnd}
            alt=""
            className={styles.technologie_card__image}
          />
          <h2 className={styles.technologie_card__title}>
            Desenvolvimento Back End
          </h2>
          <p className={styles.technologie_card__description}>
            Possuo experiencia como desenvolvedor back end também com a seguinte
            stack:
          </p>

          <h3 className={styles.technologie_card__languages}>Linguagens</h3>
          <p>JavaScript, TypeScript, Java e Kotlin</p>

          <h3 className={styles.technologie_card__dev__tools}>Dev Tools</h3>
          <div className={styles.technologie_card__list}>
            <ul>
              <li>Spring boot</li>
              <li>Express</li>
              <li>Docker</li>
            </ul>
            <ul>
              <li>MongoDB</li>
              <li>MYSQL</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </TechnologieCard>
      ),
    },
    {
      key: 2,
      content: (
        <TechnologieCard>
          <img src={Others} alt="" className={styles.technologie_card__image} />
          <h2 className={styles.technologie_card__title}>Outros</h2>
          <p className={styles.technologie_card__description}>asdasdasda</p>
          <ul>
            <li>JavaScript</li>
            <li>TypesCript</li>
            <li>Java</li>
            <li>Kotlin</li>
            <li>Docker</li>
            <li>Spring boot</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>MYSQL</li>
            <li>PostgreSQL</li>
          </ul>
        </TechnologieCard>
      ),
    },
  ];
  return (
    <>
      <h1 className={styles.technologies__title}>Tecnologias</h1>
      <section className={`${styles.technologies}`}>
        <TechnologieCarousel cards={cards} offset={2} showArrows={false} />
      </section>
    </>
  );
}
