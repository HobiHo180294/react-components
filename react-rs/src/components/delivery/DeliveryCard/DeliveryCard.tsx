import React from 'react';
import { IDeliveryFormData } from '../DeliveryForm/DeliveryForm.service';
import styles from './DeliveryCard.module.scss';

interface ICardProps {
  formData: IDeliveryFormData;
}

const generateCardData = (formData: IDeliveryFormData) =>
  Object.entries(formData).map(([key, value]) => {
    let displayValue;
    if (typeof value === 'boolean') displayValue = value ? 'Yes' : 'No';
    else if (key === 'avatar' && value instanceof File)
      displayValue = (
        <img className={styles.avatar} src={URL.createObjectURL(value)} alt="Avatar" />
      );
    else displayValue = value;

    return (
      <li className={styles.deliveryCard__item} key={key}>
        {key}: <mark className={styles.deliveryCard__value}>{displayValue}</mark>
      </li>
    );
  });

export const DeliveryCard = ({ formData }: ICardProps) => (
  <div className={styles.deliveryCard}>
    <h2 className={styles.deliveryCard__title}>Delivery Information</h2>
    <ul className={styles.deliveryCard__list}>{generateCardData(formData)}</ul>
  </div>
);
