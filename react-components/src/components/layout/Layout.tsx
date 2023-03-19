import React, { Component } from 'react';
// import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
// import SearchBar from '../search-bar/SearchBar';

class Layout extends Component {
  handleSearchSubmit(searchTerm: string) {
    console.log(`Search for ${searchTerm}`);
  }

  render() {
    return (
      <>
        <Header />
        {/* <SearchBar onSubmit={this.handleSearchSubmit} /> */}
      </>
    );
  }
}

export default Layout;
