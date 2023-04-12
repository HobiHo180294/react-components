import React, { useContext, useState } from 'react';
import { ImageData } from '../../../services/ImageData';
import { ModalContext } from '../../../context/ModalContext';
import { SelectedImageContext } from '../../../context/SelectedImageContext';
import styles from './ImageCard.module.scss';

interface IImageCardProps {
  data: ImageData;
}

export const ImageCard = ({ data }: IImageCardProps): JSX.Element => {
  const [visible, setVisibility] = useState<boolean>(false);
  const { setModalOpen } = useContext(ModalContext);
  const { setImageData } = useContext(SelectedImageContext);

  const handleMouseEnter = (): void => {
    setVisibility(true);
  };

  const handleMouseLeave = (): void => {
    setVisibility(false);
  };

  const showModal = (): void => {
    setImageData(data);
    setModalOpen(true);
  };

  return (
    <div className={styles['gallery-grid__card']}>
      <div className={styles['card__img-wrap']}>
        <img className={styles['card__image']} src={data.urls.small} alt={data.alt_description} />
      </div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={
          visible
            ? `${styles['card__content']} ${styles.visible}`
            : `${styles['card__content']} ${styles.invisible}`
        }
      >
        <div className={styles['content__top']}>
          <button onClick={showModal} className={styles['content__more']}>
            Show more
          </button>
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
