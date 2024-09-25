import useProjectsCard from '@hooks/useProjects';
import styles from './Projects.module.css';

export function Projects() {
  const projectsCards = useProjectsCard();

  return (
    <section className={styles.projects}>
      <h1 className={styles.projects__title}>Projetos</h1>
      <div className={styles.projects__container}>
        <div className={styles.projects__content}>
          {projectsCards.map((projectsCard, index) => {
            return (
              <div className={styles.projects__card} key={index}>
                <h1 className={styles.projects__card_title}>
                  {projectsCard.title}
                </h1>

                <img
                  src={projectsCard.image}
                  alt={projectsCard.imageAlt}
                  className={styles.project__card_image}
                />

                <p className={styles.projects__card_description}>
                  {projectsCard.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
