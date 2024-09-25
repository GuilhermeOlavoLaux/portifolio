import styles from './SkillCard.module.css';

import { SkillCardPropsTypes } from '@hooks/useSkillCards';

export function SkillCard({
  id,
  image,
  imageAlt,
  title,
  description,
}: SkillCardPropsTypes) {
  return (
    <div className={styles.skill_card} key={id}>
      <img src={image} alt={imageAlt} className={styles.skill_card__image} />
      <h4 className={styles.skill_card_title}>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
