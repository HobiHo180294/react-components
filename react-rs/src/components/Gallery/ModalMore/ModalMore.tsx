import React from 'react';
import styles from './ModalMore.module.scss';
import { ImageData } from '../../../services/ImageData';

interface IModalMoreProps {
  data: ImageData;
}

export const ModalMore = ({ data }: IModalMoreProps) =>
  Object.keys(data).length > 0 ? (
    <div className={styles.content}>
      <div className={styles['content__left']}>
        <div className={styles['content__image']}>
          <img
            className={styles['content__image_value']}
            src={data.urls.small}
            alt={data.alt_description}
          />
        </div>
      </div>
      <div className={styles['content__right']}>
        <div className="content__description description">
          <h1 className={styles['content__description_card-title']}>{data.alt_description}</h1>

          <div className={styles.author}>
            <div className={styles['author__avatar']}>
              <img
                className={styles['author__avatar_value']}
                src={data.user.profile_image.medium}
                alt={data.user.username}
              />
            </div>

            <div className={styles.info}>
              <h2 className="info__username">@{data.user.username}</h2>
              <h3 className="info__location">{data.user.location || 'Dnipro, Ukraine'}</h3>
            </div>

            <a
              className={styles['author__subscribe']}
              href={`https://unsplash.com/${data.user.username}`}
              target="_blank"
              rel="noreferrer"
            >
              Follow
            </a>
          </div>
        </div>
        <ul className={styles.total}>
          <li className={styles['total__followers']}>{data.user.total_likes}</li>
          <li className={styles['total__photos']}>{data.user.total_photos}</li>
          <li className="total__social">
            {data.user.social.instagram_username ? (
              <a
                href={`https://www.instagram.com/${data.user.social.instagram_username}`}
                target="_blank"
                rel="noreferrer"
                className={styles['social__ico']}
              >
                <img
                  className={styles['social__image']}
                  src="./icons/instagram-24px.png"
                  alt="Instagram"
                />
              </a>
            ) : (
              <a href={`https://twitter.com/${data.user.social.twitter_username}`}>
                <img className="social__image" src="./icons/twitter-24px.png" alt="Twitter" />
              </a>
            )}
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div>Error with uploading images...</div>
  );
