import styles from './TechnologieCard.module.css';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

interface TechnologieCardProps {
  children: React.ReactNode;
}

export default function TechnologieCard({ children }: TechnologieCardProps) {
  const [show, setShow] = useState(false);

  const cardStyle = useSpring({
    transform: show ? 'scale(1.03)' : 'scale(1)',
    boxShadow: show
      ? '0 20px 25px rgb(0 0 0 / 25%)'
      : '0 2px 10px rgb(0 0 0 / 8%)',
  });
  return (
    <animated.div
      className={styles.technologie_card}
      style={cardStyle}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
    </animated.div>
  );
}
