import styles from './Footer.module.css';
import GitHubLogo from '@assets/images/github-logo.svg';
import LinkedinLogo from '@assets/images/linkedin-logo.svg';
import InstagramLogo from '@assets/images/instagram-logo.svg';

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
