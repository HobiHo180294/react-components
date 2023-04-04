// ! OLD IMPLEMENTATION

// interface ISwitcherProps {
//   ids: string[];
//   name: string;
//   values: string[];
//   agreeRadioRef: RefObject<HTMLInputElement>;
//   refuseRadioRef: RefObject<HTMLInputElement>;
// }

// interface ISwitcherState {
//   selectedRadioBtn: string;
// }

// interface IHandleRadioCheck {
//   selectedRef: React.RefObject<HTMLInputElement>;
//   unselectedRef: React.RefObject<HTMLInputElement>;
// }

// function handleRadioCheck(radioCheckObject: IHandleRadioCheck): void {
//   const { selectedRef, unselectedRef } = radioCheckObject;

//   if (selectedRef.current && unselectedRef.current) {
//     unselectedRef.current.removeAttribute('checked');
//     selectedRef.current.setAttribute('checked', '');
//   }
// }

// export class Switcher extends Component<ISwitcherProps, ISwitcherState> {
//   private defaultState: ISwitcherState;

// constructor(props: ISwitcherProps) {
//   super(props);

//   this.defaultState = {
//     selectedRadioBtn: this.props.values[0],
//   };

//   this.state = {
//     ...this.defaultState,
//   };

//   this.onValueChange = this.onValueChange.bind(this);
//   this.reset = this.reset.bind(this);
// }

// reset(): void {
//   this.setState({ ...this.defaultState });
// }

// onValueChange(event: ChangeEvent<HTMLInputElement>): void {
//   this.setState({
//     selectedRadioBtn: event.target.value,
//   });

//   if (this.props.agreeRadioRef.current && this.props.refuseRadioRef.current) {
//     if (
//       this.props.agreeRadioRef.current.value !== event.target.value &&
//       this.props.agreeRadioRef.current.hasAttribute('checked')
//     )
//       handleRadioCheck({
//         selectedRef: this.props.refuseRadioRef,
//         unselectedRef: this.props.agreeRadioRef,
//       });

//     if (this.props.refuseRadioRef.current.value !== event.target.value)
//       handleRadioCheck({
//         selectedRef: this.props.agreeRadioRef,
//         unselectedRef: this.props.refuseRadioRef,
//       });
//   }
// }

//   render() {
//     return (
//       <div className={styles.switcher}>
//         <input
//           type="radio"
//           id={this.props.ids[0]}
//           name={this.props.name}
//           value={this.props.values[0]}
//           ref={this.props.agreeRadioRef}
//           checked={this.state.selectedRadioBtn === this.props.values[0]}
//           className={styles.radio}
//           onChange={this.onValueChange}
//         />
//         <label htmlFor={this.props.ids[0]} className={styles.label}>
//           {this.props.values[0]}
//         </label>
//         <input
//           type="radio"
//           id={this.props.ids[1]}
//           name={this.props.name}
//           value={this.props.values[1]}
//           ref={this.props.refuseRadioRef}
//           checked={this.state.selectedRadioBtn === this.props.values[1]}
//           className={styles.radio}
//           onChange={this.onValueChange}
//         />
//         <label htmlFor={this.props.ids[1]} className={styles.label}>
//           {this.props.values[1]}
//         </label>
//       </div>
//     );
//   }
// }

// ! NEW IMPLEMENTATION

import React, {
  ChangeEvent,
  RefObject,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import styles from './Switcher.module.scss';

interface ISwitcherProps {
  ids: string[];
  name: string;
  values: string[];
  agreeRadioRef: RefObject<HTMLInputElement>;
  refuseRadioRef: RefObject<HTMLInputElement>;
}

export interface ISwitcher {
  handleRadioCheck: (radioCheckObject: {
    selectedRef: React.RefObject<HTMLInputElement>;
    unselectedRef: React.RefObject<HTMLInputElement>;
  }) => void;
  reset: () => void;
}

export const Switcher = forwardRef<ISwitcher, ISwitcherProps>((props, ref) => {
  const { ids, name, values, agreeRadioRef, refuseRadioRef } = props;

  const [selectedRadioBtn, setSelectedRadioBtn] = useState<string>(values[0]);

  useEffect(() => {
    if (agreeRadioRef.current && refuseRadioRef.current) {
      if (
        agreeRadioRef.current.value !== selectedRadioBtn &&
        agreeRadioRef.current.hasAttribute('checked')
      )
        handleRadioCheck({
          selectedRef: refuseRadioRef,
          unselectedRef: agreeRadioRef,
        });

      if (refuseRadioRef.current.value !== selectedRadioBtn)
        handleRadioCheck({
          selectedRef: agreeRadioRef,
          unselectedRef: refuseRadioRef,
        });
    }
  }, [selectedRadioBtn, agreeRadioRef, refuseRadioRef]);

  const handleRadioCheck = (radioCheckObject: {
    selectedRef: React.RefObject<HTMLInputElement>;
    unselectedRef: React.RefObject<HTMLInputElement>;
  }) => {
    const { selectedRef, unselectedRef } = radioCheckObject;

    if (selectedRef.current && unselectedRef.current) {
      unselectedRef.current.removeAttribute('checked');
      selectedRef.current.setAttribute('checked', '');
    }
  };

  const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadioBtn(event.target.value);
  };

  const reset = () => {
    setSelectedRadioBtn(props.values[0]);
  };

  useImperativeHandle(ref, () => ({
    handleRadioCheck,
    reset,
  }));

  return (
    <div className={styles.switcher}>
      <input
        type="radio"
        id={ids[0]}
        name={name}
        value={values[0]}
        ref={agreeRadioRef}
        checked={selectedRadioBtn === values[0]}
        className={styles.radio}
        onChange={onValueChange}
      />
      <label htmlFor={ids[0]} className={styles.label}>
        {values[0]}
      </label>
      <input
        type="radio"
        id={ids[1]}
        name={name}
        value={values[1]}
        ref={refuseRadioRef}
        checked={selectedRadioBtn === values[1]}
        className={styles.radio}
        onChange={onValueChange}
      />
      <label htmlFor={ids[1]} className={styles.label}>
        {values[1]}
      </label>
    </div>
  );
});
