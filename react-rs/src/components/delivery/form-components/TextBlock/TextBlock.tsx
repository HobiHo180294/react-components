import React, { Component, RefObject } from 'react';
import styles from './TextBlock.module.scss';

interface ITextBlockProps {
  id: string;
  label: string;
  reference: RefObject<HTMLInputElement>;
}

export class TextBlock extends Component<ITextBlockProps> {
  render() {
    const { id, label, reference } = this.props;

    return (
      <div className={styles.container}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input type="text" id={id} ref={reference} className={styles.input} />
      </div>
    );
  }
}
