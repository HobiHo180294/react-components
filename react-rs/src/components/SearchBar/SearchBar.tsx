import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ImageContext } from '../../context/ImageContext';
import './SearchBar.scss';

interface ISearchBarProps {
  parentClassName?: string;
}

export const SearchBar = ({ parentClassName }: ISearchBarProps): JSX.Element => {
  const { register, handleSubmit } = useForm();
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const { fetchData, setSearchTitle } = useContext(ImageContext);

  useEffect(() => {
    if (searchValue !== null) localStorage.setItem('searchValue', JSON.stringify(searchValue));
  }, [searchValue]);

  useEffect(() => {
    if (localStorage.getItem('searchValue'))
      setSearchValue(JSON.parse(localStorage.getItem('searchValue') as string));
  }, []);

  const onSubmit = () => {
    fetchData?.(
      `/search/photos?page=${Math.floor(Math.random() * 5) + 1}&query=${searchValue}&client_id=${
        import.meta.env.VITE_UNSPLASH_API_ACCESS_KEY
      }`
    );
    setSearchValue('');
    if (searchValue) setSearchTitle?.(searchValue);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${parentClassName}__bar search-bar`}>
      <fieldset className="search-bar__group">
        <input
          type="search"
          value={searchValue !== null ? searchValue : ''}
          {...register('searchValue')}
          placeholder="Search..."
          className="search-bar__input"
          onChange={(event) => {
            setSearchValue(() => event.target.value);
          }}
        />
        <button disabled={!searchValue} type="submit" className="search-bar__button">
          Search
        </button>
      </fieldset>
    </form>
  );
};

export default SearchBar;
