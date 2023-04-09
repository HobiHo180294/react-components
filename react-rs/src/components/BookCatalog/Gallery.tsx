import React, { useContext } from 'react';
import { ImageCard } from './ImageCard/ImageCard';
import { ImageContext } from '../../context/ImageContext';
import { Skeleton } from './Skeleton/Skeleton';
import styles from './Gallery.module.scss';
import '../../polyfills/String';

export const Gallery = (): JSX.Element => {
  const { response, isLoading, searchTitle } = useContext(ImageContext);

  return (
    <div className={styles['gallery']}>
      <h2 className={styles['gallery__title']}>
        Results for{' '}
        <mark className={styles['gallery__mark']}>
          {searchTitle ||
            (localStorage.getItem('searchValue') === (`""` || null)
              ? 'cats'
              : localStorage.getItem('searchValue')?.removeOnEdges())}
        </mark>
      </h2>

      <div className={styles['gallery__grid']}>
        {isLoading ? (
          <Skeleton item={10} />
        ) : (
          response.map((data) => <ImageCard key={data.id} data={data} />)
        )}
      </div>
    </div>
  );
};
