import React from 'react';
import styles from './DateBlock.module.scss';

interface IDateBlockProps {
  id: string;
  label: string;
  reference: React.RefObject<HTMLInputElement>;
}

export const DateBlock = ({ id, label, reference }: IDateBlockProps) => (
  <div className={styles.dateBlock}>
    <label htmlFor={id}>{label}</label>
    <input type="date" id={id} ref={reference} className={styles.dateInput} />
  </div>
);
