// ! OLD IMPLEMENTATION

// import React, { useState, useEffect } from 'react';
// import { BookItem, IBookItemProps } from './BookItem/BookItem';
// import './BookCatalog.scss';

// export const BOOKS_DATA_STORAGE_PATH = './public/data/books.json';

// interface IBookCatalogProps {
//   parentClassName?: string;
// }

// export async function fetchBooks(path: string): Promise<IBookItemProps[]> {
//   const response = await fetch(path);
//   const booksData = await response.json();
//   return booksData;
// }

// export const BookCatalog = ({ parentClassName }: IBookCatalogProps) => {
//   const [books, setBooks] = useState<IBookItemProps[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       const booksData = await fetchBooks(BOOKS_DATA_STORAGE_PATH);
//       const books = booksData.map((book: IBookItemProps) => ({
//         author: book.author,
//         imageLink: book.imageLink,
//         title: book.title,
//         price: book.price,
//         description: book.description,
//       }));

//       setBooks(books);
//     }

//     fetchData();
//   }, []);

//   return (
//     <div className={`${parentClassName}__books books-catalog`}>
//       {books.map((book) => (
//         <BookItem
//           key={book.title}
//           parentClassName={parentClassName}
//           author={book.author}
//           imageLink={book.imageLink}
//           title={book.title}
//           price={`${book.price}$`}
//           description={book.description}
//         />
//       ))}
//     </div>
//   );
// };

// ! NEW IMPLEMENTATION
import React, { useContext } from 'react';
import { ImageCard } from './ImageCard/ImageCard';
import { ImageContext } from '../../context/ImageContext';
import { Skeleton } from './Skeleton/Skeleton';
import styles from './Gallery.module.scss';
import '../../polyfills/String';

export const Gallery = (): JSX.Element => {
  const { response, isLoading, searchTitle } = useContext(ImageContext);

  return (
    <div className={styles['gallery']}>
      <h2 className={styles['gallery__title']}>
        Results for{' '}
        <mark className={styles['gallery__mark']}>
          {searchTitle ||
            (localStorage.getItem('searchValue') === (`""` || null)
              ? 'cats'
              : localStorage.getItem('searchValue')?.removeOnEdges())}
        </mark>
      </h2>

      <div className={styles['gallery__grid']}>
        {isLoading ? (
          <Skeleton item={10} />
        ) : (
          response.map((data) => <ImageCard key={data.id} data={data} />)
        )}
      </div>
    </div>
  );
};
