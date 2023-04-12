import { createContext } from 'react';

interface IModalContextType {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
}

export const ModalContext = createContext<IModalContextType>({
  modalOpen: false,
  setModalOpen: () => {},
});
