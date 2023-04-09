import React from 'react';
import styles from './Skeleton.module.scss';

interface ISkeletonProps {
  item: number;
}

export const Skeleton = ({ item }: ISkeletonProps): JSX.Element => (
  <>
    {[...Array(item).keys()].map((value) => (
      <div key={value} className={styles['pulse-animation']}>
        <div className={styles['pulse-animation__trigger']}></div>
      </div>
    ))}
  </>
);
