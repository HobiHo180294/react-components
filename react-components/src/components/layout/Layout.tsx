import React from 'react';
import Header from '../header/Header';
import Section from '../sections/base/Section';
import SearchBar from '../sections/search-bar/SearchBar';
import BookCatalog from '../sections/book-catalog/BookCatalog';

class Layout extends React.Component {
  handleSearchSubmit(searchTerm: string) {
    console.log(`Search for ${searchTerm}`);
  }

  render() {
    return (
      <>
        <Header />
        <main className="page">
          <Section pageClassName="page" selfClassName="search">
            <SearchBar parentClassName="search" onSubmit={this.handleSearchSubmit} />
          </Section>
          <Section pageClassName="page" selfClassName="catalog">
            <BookCatalog parentClassName="catalog"></BookCatalog>
          </Section>
        </main>
      </>
    );
  }
}

export default Layout;
