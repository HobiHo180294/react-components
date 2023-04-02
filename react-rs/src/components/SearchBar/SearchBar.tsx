import React, { FC, useState, useEffect } from 'react';
import './SearchBar.scss';

interface ISearchBarProps {
  parentClassName?: string;
}

export const SearchBar: FC<ISearchBarProps> = ({ parentClassName }) => {
  const [searchTerm, setSearchTerm] = useState<string>(localStorage.getItem('searchTerm') || '');

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
  }, [searchTerm]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={`${parentClassName}__bar search-bar`}>
      <fieldset className="search-bar__group">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search..."
          onChange={handleInputChange}
          className="search-bar__input"
        />
        <button type="submit" className="search-bar__button">
          Search
        </button>
      </fieldset>
    </form>
  );
};
