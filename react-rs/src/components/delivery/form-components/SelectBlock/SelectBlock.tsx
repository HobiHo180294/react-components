//  ! OLD IMPLEMENTATION
// interface SelectProps {
//   id: string;
//   label: string;
//   options: string[];
//   reference: React.RefObject<HTMLSelectElement>;
// }

// export class SelectBlock extends Component<SelectProps> {
//   render() {
//     const { id, label, options, reference } = this.props;

//     const optionsList = options.map((option) => (
//       <option key={option} value={option}>
//         {option}
//       </option>
//     ));

//     return (
//       <div className={styles.container}>
//         <label htmlFor={id} className={styles.label}>
//           {label}
//         </label>
//         <select id={id} ref={reference} className={styles.select}>
//           {optionsList}
//         </select>
//       </div>
//     );
//   }
// }

//  ! NEW IMPLEMENTATION
import React from 'react';
import styles from './SelectBlock.module.scss';

interface SelectProps {
  id: string;
  label: string;
  options: string[];
  reference: React.RefObject<HTMLSelectElement>;
}

export const SelectBlock = ({ id, label, options, reference }: SelectProps) => {
  const optionsList = options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select id={id} ref={reference} className={styles.select}>
        {optionsList}
      </select>
    </div>
  );
};
