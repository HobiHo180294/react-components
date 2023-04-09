import React from 'react';
import styles from './Skeleton.module.scss';

interface ISkeletonProps {
  item: number;
}

export const Skeleton = ({ item }: ISkeletonProps): JSX.Element => (
  <>
    {[...Array(item).keys()].map((value) => (
      <div key={`itemID: ${value}`} className={styles.pulseAnimation}>
        <div className={styles.pulseAnimationChild}></div>
      </div>
    ))}
  </>
);
