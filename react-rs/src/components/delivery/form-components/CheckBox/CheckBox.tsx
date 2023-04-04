import React from 'react';
import styles from './CheckBox.module.scss';

interface ICheckBoxProps {
  id: string;
  label: string;
  reference: React.RefObject<HTMLInputElement>;
}

export const CheckBox = ({ id, label, reference }: ICheckBoxProps) => (
  <div className={styles.checkboxContainer}>
    <input type="checkbox" id={id} ref={reference} className={styles.checkboxInput} />
    <label htmlFor={id} className={styles.checkboxLabel}>
      {label}
    </label>
  </div>
);
