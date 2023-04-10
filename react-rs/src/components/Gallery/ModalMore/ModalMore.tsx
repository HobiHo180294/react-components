import React from 'react';
import styles from './ModalMore.module.scss';
import { ImageData } from '../../../services/ImageData';

interface IModalMoreProps {
  data: ImageData;
}

export const ModalMore = ({ data }: IModalMoreProps) => {
  if (Object.keys(data).length > 0)
    return (
      <div className={`${styles.content}`}>
        <div className="content__left">
          <div className={`${styles['content__image']}`}>
            <img
              className="content__image_value"
              src={data.urls === undefined ? '' : data.urls.small}
              alt={data.alt_description}
            />
          </div>
        </div>
        <div className="content__right">
          <div className="content__description description">
            <div className="description__author author">
              <div className="author__avatar">
                <img className="author__avatar_value" src="" alt="" />
              </div>

              <div className="author__info info">
                <h2 className="info__username"></h2>
                <h3 className="info__location"></h3>
              </div>

              <a className="author__subscribe" href="#">
                Subscribe
              </a>
            </div>
          </div>
          <div className="content__total total">
            <div className="total__likes"></div>
            <div className="total__photos"></div>
          </div>
        </div>
      </div>
    );
  else return <div>Error with uploading images...</div>;
};
