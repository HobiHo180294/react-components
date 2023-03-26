import React, { Component, RefObject } from 'react';
import styles from './Switcher.module.scss';

interface ISwitcherProps {
  ids: string[];
  name: string;
  values: string[];
  agreeRadioRef: RefObject<HTMLInputElement>;
  refuseRadioRef: RefObject<HTMLInputElement>;
}

export class Switcher extends Component<ISwitcherProps> {
  constructor(props: ISwitcherProps) {
    super(props);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleRadioChange() {
    const radio1Value = this.props.agreeRadioRef.current?.value;
    const radio2Value = this.props.refuseRadioRef.current?.value;
    const selectedValue = this.props.refuseRadioRef.current?.checked ? radio1Value : radio2Value;
    console.log('Selected value:', selectedValue);
  }

  render() {
    return (
      <div className={styles.switcher}>
        <input
          type="radio"
          id={this.props.ids[0]}
          name={this.props.name}
          value={this.props.values[0]}
          ref={this.props.agreeRadioRef}
          checked
          onChange={this.handleRadioChange}
          className={styles.radio}
        />
        <label htmlFor={this.props.ids[0]} className={styles.label}>
          {this.props.values[0]}
        </label>
        <input
          type="radio"
          id={this.props.ids[1]}
          name={this.props.name}
          value={this.props.values[1]}
          ref={this.props.refuseRadioRef}
          onChange={this.handleRadioChange}
          className={styles.radio}
        />
        <label htmlFor={this.props.ids[1]} className={styles.label}>
          {this.props.values[1]}
        </label>
      </div>
    );
  }
}
