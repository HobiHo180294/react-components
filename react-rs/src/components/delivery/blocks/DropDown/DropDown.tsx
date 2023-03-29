import React, { Component, RefObject } from 'react';
import styles from './DropDown.module.scss';

interface DropDownProps {
  inputID: string;
  dataListID: string;
  label: string;
  options: string[];
  inputRef: RefObject<HTMLInputElement>;
  dataListRef: RefObject<HTMLDataListElement>;
}

export class DropDown extends Component<DropDownProps> {
  render() {
    const { inputID, dataListID, options, label, inputRef, dataListRef } = this.props;

    const optionsList = options.map((option) => <option key={option} value={option} />);

    return (
      <div className={styles.dropdown}>
        <label htmlFor={inputID}>{label}</label>
        <input type="text" id={inputID} ref={inputRef} list={dataListID} />
        <datalist id={dataListID} ref={dataListRef}>
          {optionsList}
        </datalist>
      </div>
    );
  }
}
