import React, { useState } from 'react';
import { Section } from '../utils/section/Section';
import { Gallery } from '../BookCatalog/Gallery';
import { SearchBar } from '../SearchBar/SearchBar';
import { useAxios } from '../../hooks/useAxios';
import { ImageContext } from '../../context/ImageContext';

export const MainPage = () => {
  const [searchTitle, setSearchTitle] = useState<string>('');

  const { response, isLoading, error, fetchData } = useAxios(
    `/search/photos?page=1&query=${
      localStorage.getItem('searchValue') === (`""` || null)
        ? 'cats'
        : localStorage.getItem('searchValue')?.removeOnEdges()
    }&client_id=${import.meta.env.VITE_UNSPLASH_API_ACCESS_KEY}`
  );

  const value = { response, isLoading, error, fetchData, searchTitle, setSearchTitle };

  return (
    <ImageContext.Provider value={value}>
      <Section pageClassName="page" selfClassName="search">
        <SearchBar parentClassName="search" />
      </Section>
      <Section pageClassName="page" selfClassName="catalog">
        <Gallery />
      </Section>
    </ImageContext.Provider>
  );
};
