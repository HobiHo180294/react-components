import React, { useState } from 'react';
import { ImageData } from '../../../services/ImageData';
import styles from './ImageCard.module.scss';

interface IImageCardProps {
  data: ImageData;
}

export const ImageCard = ({ data }: IImageCardProps) => {
  const [visible, setVisibility] = useState<boolean>(false);

  const handleMouseEnter = (): void => {
    setVisibility(true);
  };

  const handleMouseLeave = (): void => {
    setVisibility(false);
  };

  return (
    <div className={styles['gallery-grid__card']}>
      <div className={styles['card__img-wrap']}>
        <img className={styles['card__image']} src={data.urls.small} alt={data.alt_description} />
      </div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={visible ? styles['card__content-visible'] : styles['card__content-invisible']}
      >
        <div className={styles['content__top']}>
          <button className={styles['content__more']}>Show more</button>
        </div>
        <div className={styles['content__bottom']}>
          <a
            className={styles['content__link']}
            href={data.urls.regular}
            target="_blank"
            rel="noreferrer"
          >
            {data.urls.regular}
          </a>
          <span className={styles['content__likes-ico']} />
          <span className={styles['content__likes-count']}>{data.likes}</span>
        </div>
      </div>
    </div>
  );
};
