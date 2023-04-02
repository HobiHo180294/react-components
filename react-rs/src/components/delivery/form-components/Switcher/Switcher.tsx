import React, { ChangeEvent, Component, RefObject } from 'react';
import styles from './Switcher.module.scss';

interface ISwitcherProps {
  ids: string[];
  name: string;
  values: string[];
  agreeRadioRef: RefObject<HTMLInputElement>;
  refuseRadioRef: RefObject<HTMLInputElement>;
}

interface ISwitcherState {
  selectedRadioBtn: string;
}

interface IHandleRadioCheck {
  selectedRef: React.RefObject<HTMLInputElement>;
  unselectedRef: React.RefObject<HTMLInputElement>;
}

function handleRadioCheck(radioCheckObject: IHandleRadioCheck): void {
  const { selectedRef, unselectedRef } = radioCheckObject;

  if (selectedRef.current && unselectedRef.current) {
    unselectedRef.current.removeAttribute('checked');
    selectedRef.current.setAttribute('checked', '');
  }
}

export class Switcher extends Component<ISwitcherProps, ISwitcherState> {
  private defaultState: ISwitcherState;

  constructor(props: ISwitcherProps) {
    super(props);

    this.defaultState = {
      selectedRadioBtn: this.props.values[0],
    };

    this.state = {
      ...this.defaultState,
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset(): void {
    this.setState({ ...this.defaultState });
  }

  onValueChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({
      selectedRadioBtn: event.target.value,
    });

    if (this.props.agreeRadioRef.current && this.props.refuseRadioRef.current) {
      if (
        this.props.agreeRadioRef.current.value !== event.target.value &&
        this.props.agreeRadioRef.current.hasAttribute('checked')
      )
        handleRadioCheck({
          selectedRef: this.props.refuseRadioRef,
          unselectedRef: this.props.agreeRadioRef,
        });

      if (this.props.refuseRadioRef.current.value !== event.target.value)
        handleRadioCheck({
          selectedRef: this.props.agreeRadioRef,
          unselectedRef: this.props.refuseRadioRef,
        });
    }
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
          checked={this.state.selectedRadioBtn === this.props.values[0]}
          className={styles.radio}
          onChange={this.onValueChange}
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
          checked={this.state.selectedRadioBtn === this.props.values[1]}
          className={styles.radio}
          onChange={this.onValueChange}
        />
        <label htmlFor={this.props.ids[1]} className={styles.label}>
          {this.props.values[1]}
        </label>
      </div>
    );
  }
}
