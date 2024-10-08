import CocaCola from '@assets/images/coca-cola.svg';
import Cwi from '@assets/images/cwi.png';
import ComplianceTotal from '@assets/images/compliance-total.png';
import PrivacyTools from '@assets/images/privacy-tools.png';

import styles from './WorkExperience.module.css';

export function WorkExperience() {
  return (
    <div className={styles.work_experience}>
      <h1 className={styles.work_experience__title}>
        Empresas e projetos que tive o prazer de participar
      </h1>

      <div className={styles.work_experience__logos__container}>
        <img src={CocaCola} alt="" className={styles.work_experience__logo} />
        <img
          src={PrivacyTools}
          alt=""
          className={styles.work_experience__privacy__logo}
        />
        <img src={Cwi} alt="" className={styles.work_experience__logo} />
        <img
          src={ComplianceTotal}
          alt=""
          className={styles.work_experience__logo}
        />
      </div>
    </div>
  );
}
