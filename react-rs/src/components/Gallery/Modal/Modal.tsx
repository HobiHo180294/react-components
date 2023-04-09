import React, { FC } from 'react';

interface IModalProps {
  isOpened: boolean;
  onModalClose: () => void;
}

export const Modal: FC<IModalProps> = ({ isOpened, onModalClose, children }) => {
  return (
    <div className={`modal__wrapper ${isOpened ? 'open' : 'close'}`}>
      <div className="modal__body">
        <div className="modal__close" onClick={onModalClose}>
          ×
        </div>
        {children}
      </div>
    </div>
  );
};
