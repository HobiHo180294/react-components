import React from 'react';
import Header from '../header/Header';
import Section from '../sections/base/Section';
import SearchBar from '../sections/search-bar/SearchBar';

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
        </main>
      </>
    );
  }
}

export default Layout;
