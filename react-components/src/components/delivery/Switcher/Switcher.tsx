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
          className={styles.radio}
        />
        <label htmlFor={this.props.ids[1]} className={styles.label}>
          {this.props.values[1]}
        </label>
      </div>
    );
  }
}
