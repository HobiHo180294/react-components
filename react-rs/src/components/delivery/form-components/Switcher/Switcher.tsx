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
  getCurrentValue: () => string | null;
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

  const getCurrentValue = () =>
    agreeRadioRef.current?.checked
      ? agreeRadioRef.current?.value
      : refuseRadioRef.current?.value || null;

  useImperativeHandle(ref, () => ({
    handleRadioCheck,
    reset,
    getCurrentValue,
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
