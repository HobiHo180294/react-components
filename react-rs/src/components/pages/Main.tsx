import React, { Component } from 'react';
import Section from '../../components/sections/base/Section';
import BookCatalog from '../../components/sections/book-catalog/BookCatalog';
import SearchBar from '../../components/sections/search-bar/SearchBar';

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
