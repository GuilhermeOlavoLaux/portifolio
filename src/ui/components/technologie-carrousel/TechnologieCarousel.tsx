import Carousel from 'react-spring-3d-carousel';
import React, { useState, useEffect } from 'react';
import { config } from 'react-spring';
import styles from './TechnologieCarousel.module.css';

interface Card {
  key: number;
  content: React.ReactNode;
  onClick?: () => void;
}

interface TechnologieCarouselTypes {
  cards: Card[];
  offset: number;
  showArrows: boolean;
}

export default function TechnologieCarousel(props: TechnologieCarouselTypes) {
  const table = props.cards.map((card, index) => ({
    ...card,
    onClick: () => setGoToSlide(index),
  }));

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState<number | undefined>(undefined);
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
