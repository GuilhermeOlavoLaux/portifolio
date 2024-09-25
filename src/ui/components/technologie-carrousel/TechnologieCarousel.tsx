import Carousel from 'react-spring-3d-carousel';
import { useState, useEffect, SetStateAction } from 'react';
import { config } from 'react-spring';

import styles from './TechnologieCarousel.module.css';

interface TechnologieCarouselTypes {
  cards: any;
  offset: number;
  showArrows: boolean;
}

export default function TechnologieCarousel(props: TechnologieCarouselTypes) {
  const table = props.cards.map(
    (card: any, index: SetStateAction<undefined>) => {
      return {
        ...card,
        onClick: () => setGoToSlide(index),
      };
    }
  );

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState();
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div className={styles.technologie_carousel}>
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
