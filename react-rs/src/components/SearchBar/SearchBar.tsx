import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './SearchBar.scss';

interface ISearchBarProps {
  parentClassName?: string;
}

export const SearchBar = ({ parentClassName }: ISearchBarProps) => {
  const { register } = useForm();
  const [searchValue, setSearchValue] = useState<string | null>(null);

  useEffect(() => {
    if (searchValue !== null) localStorage.setItem('searchValue', JSON.stringify(searchValue));
  }, [searchValue]);

  useEffect(() => {
    if (localStorage.getItem('searchValue'))
      setSearchValue(JSON.parse(localStorage.getItem('searchValue') as string));
  }, []);

  return (
    <form className={`${parentClassName}__bar search-bar`}>
      <fieldset className="search-bar__group">
        <input
          type="search"
          defaultValue={searchValue !== null ? searchValue : ''}
          {...register('searchValue')}
          placeholder="Search..."
          className="search-bar__input"
          onChange={(event) => {
            setSearchValue(() => event.target.value);
          }}
        />
        <button type="submit" className="search-bar__button">
          Search
        </button>
      </fieldset>
    </form>
  );
};

export default SearchBar;
