import React, { useState } from 'react';
import { Section } from '../utils/section/Section';
import { Gallery } from '../Gallery/Gallery';
import { SearchBar } from '../SearchBar/SearchBar';
import { useAxios } from '../../hooks/useAxios';
import { ImageContext } from '../../context/ImageContext';
import { ModalContext } from '../../context/ModalContext';
import { SelectedImageContext } from '../../context/SelectedImageContext';
import { Modal } from '../Modal/Modal';
import { ModalMore } from '../../components/Gallery/ModalMore/ModalMore';
import { ImageData } from '../../services/ImageData';

export const MainPage = () => {
  const [searchTitle, setSearchTitle] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [imageData, setImageData] = useState<ImageData | Record<string, unknown>>({});

  const { response, isLoading, error, fetchData } = useAxios(
    `/search/photos?page=1&query=${
      localStorage.getItem('searchValue') === (`""` || null)
        ? 'cats'
        : localStorage.getItem('searchValue')?.removeOnEdges()
    }&client_id=${import.meta.env.VITE_UNSPLASH_API_ACCESS_KEY}`
  );

  const value = { response, isLoading, error, fetchData, searchTitle, setSearchTitle };

  const closeModal = (): void => {
    setModalOpen(false);
  };

  return (
    <ImageContext.Provider value={value}>
      <Section pageClassName="page" selfClassName="search">
        <SearchBar parentClassName="search" />
      </Section>
      <Section pageClassName="page" selfClassName="catalog">
        <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
          <SelectedImageContext.Provider value={{ imageData, setImageData }}>
            <Gallery />
            <Modal onModalClose={closeModal} isOpened={modalOpen}>
              <ModalMore data={imageData as ImageData} />
            </Modal>
          </SelectedImageContext.Provider>
        </ModalContext.Provider>
      </Section>
    </ImageContext.Provider>
  );
};
