import React, { Component } from 'react';
import { BookItem, IBookItemProps } from './BookItem/BookItem';
import './BookCatalog.scss';

export const BOOKS_DATA_STORAGE_PATH = './public/data/books.json';

interface IBookCatalogProps {
  parentClassName?: string;
}

interface IBookCatalogState {
  books: IBookItemProps[];
}

export async function fetchBooks(path: string): Promise<IBookItemProps[]> {
  const response = await fetch(path);
  const booksData = await response.json();
  return booksData;
}

export const renderBookItems = (
  books: IBookItemProps[],
  parentClassName: string | undefined
): JSX.Element[] =>
  books.map((book) => (
    <BookItem
      key={book.title}
      parentClassName={parentClassName}
      author={book.author}
      imageLink={book.imageLink}
      title={book.title}
      price={`${book.price}$`}
      description={book.description}
    />
  ));

export class BookCatalog extends Component<IBookCatalogProps, IBookCatalogState> {
  constructor(props: IBookCatalogProps) {
    super(props);
    this.state = {
      books: [],
    };
  }

  async componentDidMount() {
    const booksData = await fetchBooks(BOOKS_DATA_STORAGE_PATH);

    const books = booksData.map((book: IBookItemProps) => ({
      author: book.author,
      imageLink: book.imageLink,
      title: book.title,
      price: book.price,
      description: book.description,
    }));

    this.setState({ books });
  }

  render() {
    const { parentClassName } = this.props;
    const { books } = this.state;

    return (
      <div className={`${parentClassName}__books books-catalog`}>
        {renderBookItems(books, 'books-catalog')}
      </div>
    );
  }
}
