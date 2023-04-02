import React, { FC, useState, useEffect } from 'react';
import { BookItem, IBookItemProps } from './BookItem/BookItem';
import './BookCatalog.scss';

export const BOOKS_DATA_STORAGE_PATH = './public/data/books.json';

interface IBookCatalogProps {
  parentClassName?: string;
}

export async function fetchBooks(path: string): Promise<IBookItemProps[]> {
  const response = await fetch(path);
  const booksData = await response.json();
  return booksData;
}

export const BookCatalog: FC<IBookCatalogProps> = ({ parentClassName }) => {
  const [books, setBooks] = useState<IBookItemProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      const booksData = await fetchBooks(BOOKS_DATA_STORAGE_PATH);
      const books = booksData.map((book: IBookItemProps) => ({
        author: book.author,
        imageLink: book.imageLink,
        title: book.title,
        price: book.price,
        description: book.description,
      }));

      setBooks(books);
    }

    fetchData();
  }, []);

  return (
    <div className={`${parentClassName}__books books-catalog`}>
      {books.map((book) => (
        <BookItem
          key={book.title}
          parentClassName={parentClassName}
          author={book.author}
          imageLink={book.imageLink}
          title={book.title}
          price={`${book.price}$`}
          description={book.description}
        />
      ))}
    </div>
  );
};
