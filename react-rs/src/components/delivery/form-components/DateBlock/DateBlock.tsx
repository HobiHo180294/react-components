// ! OLD IMPLEMENTATION
// interface IDateBlockProps {
//   id: string;
//   label: string;
//   reference: React.RefObject<HTMLInputElement>;
// }

// export class DateBlock extends Component<IDateBlockProps> {
//   render() {
//     const { id, label, reference } = this.props;

//     return (
//       <div className={styles.dateBlock}>
//         <label htmlFor={id}>{label}</label>
//         <input type="date" id={id} ref={reference} className={styles.dateInput} />
//       </div>
//     );
//   }
// }

import React from 'react';
import styles from './DateBlock.module.scss';

// ! NEW IMPLEMENTATION
interface IDateBlockProps {
  id: string;
  label: string;
  reference: React.RefObject<HTMLInputElement>;
}

export const DateBlock = ({ id, label, reference }: IDateBlockProps) => (
  <div className={styles.dateBlock}>
    <label htmlFor={id}>{label}</label>
    <input type="date" id={id} ref={reference} className={styles.dateInput} />
  </div>
);
