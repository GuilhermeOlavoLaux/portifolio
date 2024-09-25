import styles from './Footer.module.css';
import GitHubLogo from '@assets/github-logo.svg';
import LinkedinLogo from '@assets/linkedin-logo.svg';
import InstagramLogo from '@assets/instagram-logo.svg';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© All rights reserved</p>

      <div className={styles.footer__content}>
        <img src={GitHubLogo} alt="" />
        <img src={LinkedinLogo} alt="" />
        <img src={InstagramLogo} alt="" />
      </div>
    </footer>
  );
}
