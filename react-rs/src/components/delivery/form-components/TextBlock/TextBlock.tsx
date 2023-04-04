import React, { RefObject } from 'react';
import styles from './TextBlock.module.scss';

interface ITextBlockProps {
  id: string;
  label: string;
  reference: RefObject<HTMLInputElement>;
}

export const TextBlock = ({ id, label, reference }: ITextBlockProps) => (
  <div className={styles.container}>
    <label htmlFor={id} className={styles.label}>
      {label}
    </label>
    <input type="text" id={id} ref={reference} className={styles.input} />
  </div>
);
