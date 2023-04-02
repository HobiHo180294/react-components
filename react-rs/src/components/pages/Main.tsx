import React, { Component } from 'react';
import Section from '../utils/section/Section';
import { BookCatalog } from '../BookCatalog/BookCatalog';
import SearchBar from '../SearchBar/SearchBar';

class MainPage extends Component {
  render() {
    return (
      <>
        <Section pageClassName="page" selfClassName="search">
          <SearchBar parentClassName="search" />
        </Section>
        <Section pageClassName="page" selfClassName="catalog">
          <BookCatalog parentClassName="catalog"></BookCatalog>
        </Section>
      </>
    );
  }
}

export default MainPage;
