import React, { Component } from 'react';
import styles from './CheckBox.module.scss';

interface ICheckBoxProps {
  id: string;
  label: string;
  reference: React.RefObject<HTMLInputElement>;
}

export class CheckBox extends Component<ICheckBoxProps> {
  render() {
    const { id, label, reference } = this.props;

    return (
      <div className={styles.checkboxContainer}>
        <input type="checkbox" id={id} ref={reference} className={styles.checkboxInput} />
        <label htmlFor={id} className={styles.checkboxLabel}>
          {label}
        </label>
      </div>
    );
  }
}
