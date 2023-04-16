import React from 'react';
import styles from './FileBlock.module.scss';

interface IFileBlockProps {
  id: string;
  label: string;
  fileType: string;
  reference: React.RefObject<HTMLInputElement>;
}

export const FileBlock = ({ id, label, fileType, reference }: IFileBlockProps) => (
  <div className={styles.fileBlock}>
    <label htmlFor={id} className={styles.label}>
      {label}
    </label>
    <input type="file" id={id} ref={reference} accept={fileType} className={styles.input} />
  </div>
);
