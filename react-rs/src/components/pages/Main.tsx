import React from 'react';
import { Section } from '../utils/section/Section';
import { BookCatalog } from '../BookCatalog/BookCatalog';
import { SearchBar } from '../SearchBar/SearchBar';

export const MainPage = () => (
  <>
    <Section pageClassName="page" selfClassName="search">
      <SearchBar parentClassName="search" />
    </Section>
    <Section pageClassName="page" selfClassName="catalog">
      <BookCatalog parentClassName="catalog" />
    </Section>
  </>
);
