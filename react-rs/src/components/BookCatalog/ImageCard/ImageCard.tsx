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

import React, { useState } from 'react';
import { ImageData } from '../../../services/ImageData';
import styles from './ImageCard.module.scss';

interface IImageCardProps {
  data: ImageData;
}

export const ImageCard = ({ data }: IImageCardProps) => {
  const [visible, setVisibility] = useState<boolean>(false);

  const handleMouseEnter = (): void => {
    setVisibility(true);
  };

  const handleMouseLeave = (): void => {
    setVisibility(false);
  };

  return (
    <div className={styles['gallery-grid__card']}>
      <div className={styles['card__img-wrap']}>
        <img className={styles['card__image']} src={data.urls.small} alt={data.alt_description} />
      </div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={visible ? styles['card__content-visible'] : styles['card__content-invisible']}
      >
        <div className={styles['content__top']}>
          <button className={styles['content__more']}>Show more</button>
        </div>
        <div className={styles['content__bottom']}>
          <a
            className={styles['content__link']}
            href={data.urls.regular}
            target="_blank"
            rel="noreferrer"
          >
            {data.urls.regular}
          </a>
          <span className={styles['content__likes-ico']} />
          <span className={styles['content__likes-count']}>{data.likes}</span>
        </div>
      </div>
    </div>
  );
};
