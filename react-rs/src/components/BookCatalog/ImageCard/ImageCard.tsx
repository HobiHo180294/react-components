// ! OLD IMPLEMENTATION

// import React from 'react';
// import './BookItem.scss';

// export interface IBookItemProps {
//   parentClassName?: string;
//   author: string;
//   imageLink: string;
//   title: string;
//   price: string;
//   description: string;
// }

// export const BookItem = ({
//   parentClassName,
//   title,
//   imageLink,
//   author,
//   price,
//   description,
// }: IBookItemProps) => {
//   const buttons = [
//     { text: 'Show more', className: 'book-buttons__more' },
//     { text: 'Add to bag', className: 'book-buttons__buy' },
//   ];

//   const renderButtons = (buttons: { className: string; text: string }[]): JSX.Element[] =>
//     buttons.map((button, index) => (
//       <button key={index} className={button.className}>
//         {button.text}
//       </button>
//     ));

//   return (
//     <div className={`${parentClassName}__item book-item`}>
//       <figure className="book-item__cover book-cover">
//         <img className="book-cover__pic" alt={title} src={imageLink} width="249.75" height="320" />
//         <div className="book-cover__characteristics">
//           <figcaption className="book-cover__author">{author}</figcaption>
//           <div className="book-cover__price">{price}</div>
//         </div>
//       </figure>

//       <h2 className="book-item__title">{description}</h2>
//       <div className="book-item__buttons book-buttons">{renderButtons(buttons)}</div>
//     </div>
//   );
// };

// ! NEW IMPLEMENTATION

import React from 'react';
import { ImageData } from '../../../services/ImageData';
import styles from './ImageCard.module.scss';

interface IImageCardProps {
  data: ImageData;
}

export const ImageCard = ({ data }: IImageCardProps) => (
  <a href={data.urls.regular} target="_blank" rel="noreferrer">
    <img className={styles['card__image']} src={data.urls.small} alt={data.alt_description} />
  </a>
);
