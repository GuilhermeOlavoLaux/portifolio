import { useState } from 'react';
import styles from './Header.module.css';
// import GuilhermeLauxLogo from '@assets/guilherme-laux-logo.png';

export default function Header() {
  const [wasScrolled, setWasScrolled] = useState(false);
  function changeHeaderBackground() {
    if (window.scrollY > 50) {
      setWasScrolled(true);
      return;
    }
    setWasScrolled(false);
  }
  window.addEventListener('scroll', changeHeaderBackground);

  const headerClassName = `container ${styles.header} ${
    wasScrolled && styles.header__scrolled
  }`;

  return (
    <header className={headerClassName}>
      {/* <img src={GuilhermeLauxLogo} alt="" className={styles.header__logo} /> */}

      <nav>
        <ul className={styles.header__nav}>
          <li className={styles.header__link}>Home</li>
          <li className={styles.header__link}>Tecnologias</li>
          <li className={styles.header__link}>Habilidades</li>
          <li className={styles.header__link}>Experiências</li>
          <li className={styles.header__link}>Projetos</li>
        </ul>
      </nav>
    </header>
  );
}
