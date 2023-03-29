import React, { Component } from 'react';
import { IDeliveryFormState } from '../DeliveryForm/DeliveryForm';
import styles from './DeliveryCard.module.scss';

interface ICardProps {
  formData: IDeliveryFormState;
}

const generateFormFields = (formData: IDeliveryFormState) => {
  return Object.entries(formData).map(([key, value]) => {
    let displayValue;
    if (typeof value === 'boolean') displayValue = value ? 'Yes' : 'No';
    else if (Array.isArray(value) && value[0] && value[0].name) displayValue = value[0].name;
    else if (key === 'avatar' && value && value[0] && value[0].name) displayValue = value[0].name;
    else displayValue = value;

    return (
      <li key={key}>
        {key}: {displayValue}
      </li>
    );
  });
};

export class DeliveryCard extends Component<ICardProps> {
  render() {
    const { formData } = this.props;

    return (
      <div className={styles.deliveryCard}>
        <h2 className={styles.deliveryCard__title}>Delivery Information</h2>
        <ul className={styles.deliveryCard__list}>{generateFormFields(formData)}</ul>
      </div>
    );
  }
}
