// ! PREVIOUS IMPLEMENTATION

// import React, { Component, RefObject } from 'react';
// import styles from './TextBlock.module.scss';

// interface ITextBlockProps {
//   id: string;
//   label: string;
//   reference: RefObject<HTMLInputElement>;
// }

// export class TextBlock extends Component<ITextBlockProps> {
//   render() {
//     const { id, label, reference } = this.props;

//     return (
//       <div className={styles.container}>
//         <label htmlFor={id} className={styles.label}>
//           {label}
//         </label>
//         <input type="text" id={id} ref={reference} className={styles.input} />
//       </div>
//     );
//   }
// }

// ! NEW IMPLEMENTATION
import React, { RefObject } from 'react';
import styles from './TextBlock.module.scss';

interface ITextBlockProps {
  id: string;
  label: string;
  reference: RefObject<HTMLInputElement>;
}

export const TextBlock = ({ id, label, reference }: ITextBlockProps) => (
  <div className={styles.container}>
    <label htmlFor={id} className={styles.label}>
      {label}
    </label>
    <input type="text" id={id} ref={reference} className={styles.input} />
  </div>
);

// interface ITextBlockProps {
//   id: string;
//   label: string;
//   register: UseFormRegister<FieldValues>;
// }

// export interface ITextBlockRef {
//   getValue: () => string | undefined;
// }

// export const TextBlock = forwardRef<ITextBlockRef, ITextBlockProps>((props, ref) => {
//   const { id, label, register } = props;
//   const inputRef = useRef<HTMLInputElement>(null);

//   useImperativeHandle(ref, () => ({
//     getValue: () => inputRef.current?.value,
//   }));

//   return (
//     <div className={styles.container}>
//       <label htmlFor={id} className={styles.label}>
//         {label}
//       </label>
//       <input type="text" id={id} {...register} ref={inputRef} className={styles.input} />
//     </div>
//   );
// });
