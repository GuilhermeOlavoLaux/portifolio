import GuilhermeLaux from "@assets/guilheme-laux-photo.png";
import styles from "./AboutMe.module.css";

export function AboutMe() {
  return (
    <section className={styles.aboute_me}>
      <div className={styles.aboute_me__container}>
        <div className={styles.aboute_me__content}>
          <img src={GuilhermeLaux} alt="" className={styles.aboute_me__image} />

          <div className={styles.aboute_me__info}>
            <h3 className={styles.aboute_me__info__title}>
              Um pouco da minha historia
            </h3>
            <p className={styles.aboute_me__description}>
              Me chamo Guilherme Olavo Laux, tenho 24 anos e sou um
              Desenvolvedor Full Stack. Trabalho com desenvolvimento de software
              há mais de dois anos e estou no último semestre de Análise e
              Desenvolvimento De Sistemas.
            </p>
            <p className={styles.aboute_me__description}>
              Atualmente trabalho na CWI Software, alocado no cliente Coca-Cola.
              Atuo principalmente com desenvolvimento front end, mas tenho
              contato direto com o back end no dia a dia. Além disso, já
              trabalhei em duas startups como dev full stack, onde pude
              aprimorar meus conhecimentos com diversas tecnologias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
