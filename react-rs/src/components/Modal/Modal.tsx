import React, { FC } from 'react';
import style from './Modal.module.scss';

interface IModalProps {
  isOpened: boolean;
  onModalClose: () => void;
}

export const Modal: FC<IModalProps> = ({ isOpened, onModalClose, children }) => {
  return (
    <div className={`${style.modal__wrapper} ${isOpened ? style.open : style.close}`}>
      <div className={style['modal__body']}>
        <div className={style['modal__close']} onClick={onModalClose}>
          ×
        </div>
        {children}
      </div>
    </div>
  );
};
