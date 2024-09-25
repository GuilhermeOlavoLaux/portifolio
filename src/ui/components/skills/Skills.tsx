import styles from './Skills.module.css';
import { SkillCard } from '@components/skill-card/SkillCard';
import useSkillCards, { SkillCardPropsTypes } from '@hooks/useSkillCards';
import { WorkExperience } from '@components/work-experience/WorkExperience';

export default function Skills() {
  const skillCards = useSkillCards();

  return (
    <section className={styles.skills}>
      <h1 className={styles.skills__title}>O que ofereço?</h1>
      <div className={styles.skills__cards}>
        {skillCards.map((skillCard: SkillCardPropsTypes, index) => {
          return (
            <SkillCard
              id={skillCard.id}
              image={skillCard.image}
              imageAlt={skillCard.imageAlt}
              title={skillCard.title}
              description={skillCard.description}
              key={index}
            />
          );
        })}
      </div>
      <WorkExperience />
      <svg
        className={styles.skills__cards__wave}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="rgb(30, 74, 98)"
          fillOpacity="1"
          d="M0,320L48,288C96,256,192,192,288,165.3C384,139,480,149,576,165.3C672,181,768,203,864,218.7C960,235,1056,245,1152,229.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </section>
  );
}
