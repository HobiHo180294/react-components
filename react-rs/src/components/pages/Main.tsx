import React from 'react';
import { Section } from '../utils/section/Section';
import { BookCatalog } from '../BookCatalog/BookCatalog';
import { SearchBar } from '../SearchBar/SearchBar';
import { useAxios } from '../../hooks/useAxios';
import { ImageContext } from '../../context/ImageContext';

export const MainPage = () => {
  const { response, isLoading, error, fetchData } = useAxios(
    `/search/photos?page=1&query=cats&client_id=${import.meta.env.VITE_UNSPLASH_API_ACCESS_KEY}`
  );

  const value = { response, isLoading, error, fetchData };

  return (
    <ImageContext.Provider value={value}>
      <Section pageClassName="page" selfClassName="search">
        <SearchBar parentClassName="search" />
      </Section>
      <Section pageClassName="page" selfClassName="catalog">
        <BookCatalog />
      </Section>
    </ImageContext.Provider>
  );
};
