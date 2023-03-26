import React, { Component, createRef, FormEvent, RefObject } from 'react';
import { CheckBox } from '../blocks/CheckBox/CheckBox';
import { DateBlock } from '../blocks/DateBlock/DateBlock';
import { DropDown } from '../blocks/DropDown/DropDown';
import { FileBlock } from '../blocks/FileBlock/FileBlock';
import { SelectBlock } from '../blocks/SelectBlock/SelectBlock';
import { TextBlock } from '../blocks/TextBlock/TextBlock';
import { DeliveryCard } from '../DeliveryCard/DeliveryCard';
import { Switcher } from '../Switcher/Switcher';
import styles from './DeliveryForm.module.scss';

const countryOptions = ['Ukraine', 'Poland', 'Germany', 'Estonia', 'USA'];
const stateOptions = ['Kyiv', 'Warsaw', 'Berlin', 'Tallinn', 'Washington'];

export interface IDeliveryFormState {
  fullName: string;
  zipCode: string;
  birthDate: string;
  deliveryDate: string;
  country: string;
  state: string;
  agreePersonalData: boolean;
  needExtraPresents: boolean;
  gender: string;
  notifications: string;
  avatar: FileList | null;
}

interface IDeliveryFormStateWithSubmit extends IDeliveryFormState {
  submitted: boolean;
  formDataList: IDeliveryFormState[] | [];
}

export class DeliveryForm extends Component<Record<string, never>, IDeliveryFormStateWithSubmit> {
  private formRef: React.RefObject<HTMLFormElement> = createRef();
  private fieldsetRef: RefObject<HTMLFieldSetElement> = createRef();
  private fullNameRef: RefObject<HTMLInputElement> = createRef();
  private zipCodeRef: RefObject<HTMLInputElement> = createRef();
  private birthDateRef: RefObject<HTMLInputElement> = createRef();
  private deliveryDateRef: RefObject<HTMLInputElement> = createRef();
  private countriesInputRef: RefObject<HTMLInputElement> = createRef();
  private countriesListRef: RefObject<HTMLDataListElement> = createRef();
  private statesListRef: RefObject<HTMLSelectElement> = createRef();
  private agreeCheckboxRef: RefObject<HTMLInputElement> = createRef();
  private extraCheckboxRef: RefObject<HTMLInputElement> = createRef();
  private agreeRadioRef: RefObject<HTMLInputElement> = createRef();
  private refuseRadioRef: RefObject<HTMLInputElement> = createRef();
  private fileRef: RefObject<HTMLInputElement> = createRef();
  private buttonRef: RefObject<HTMLButtonElement> = createRef();

  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      fullName: '',
      zipCode: '',
      birthDate: '',
      deliveryDate: '',
      country: '',
      state: '',
      agreePersonalData: false,
      needExtraPresents: false,
      gender: '',
      notifications: '',
      avatar: null,
      submitted: false,
      formDataList: [],
    };
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: IDeliveryFormState = {
      fullName: this.fullNameRef.current?.value ?? '',
      zipCode: this.zipCodeRef.current?.value ?? '',
      birthDate: this.birthDateRef.current?.value ?? '',
      deliveryDate: this.deliveryDateRef.current?.value ?? '',
      country: this.countriesInputRef.current?.value ?? '',
      state: this.statesListRef.current?.value ?? '',
      agreePersonalData: this.agreeCheckboxRef.current?.checked ?? false,
      needExtraPresents: this.extraCheckboxRef.current?.checked ?? false,
      gender: document.querySelector<HTMLInputElement>('input[name="gender"]:checked')?.value ?? '',
      notifications:
        document.querySelector<HTMLInputElement>('input[name="notifications"]:checked')?.value ??
        '',
      avatar: this.fileRef.current?.files ?? null,
    };

    this.setState((prevState) => ({
      ...prevState,
      formDataList: [...prevState.formDataList, formData],
    }));

    if (this.formRef.current) this.formRef.current.reset();
  };

  render() {
    const { formDataList } = this.state;

    return (
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={this.handleSubmit} ref={this.formRef}>
          <fieldset className={styles.fieldset} ref={this.fieldsetRef}>
            <TextBlock id="fullName" label="Full name:" reference={this.fullNameRef} />
            <TextBlock id="zip" label="Zip-code:" reference={this.zipCodeRef} />

            <DateBlock id="birthDate" label="Birth date:" reference={this.birthDateRef} />
            <DateBlock id="deliveryDate" label="Delivery date:" reference={this.deliveryDateRef} />

            <DropDown
              inputID="countries"
              dataListID="countries-list"
              label="Select a country:"
              options={countryOptions}
              inputRef={this.countriesInputRef}
              dataListRef={this.countriesListRef}
            />

            <SelectBlock
              id="states"
              label="Select a state:"
              options={stateOptions}
              reference={this.statesListRef}
            />

            <CheckBox
              id="agree"
              label="I consent to my personal data"
              reference={this.agreeCheckboxRef}
            />
            <CheckBox
              id="extra"
              label="I would like to choose several elements from the list"
              reference={this.extraCheckboxRef}
            />

            <Switcher
              ids={['maleID', 'femaleID']}
              name={'gender'}
              values={['male', 'female']}
              agreeRadioRef={this.agreeRadioRef}
              refuseRadioRef={this.refuseRadioRef}
            />
            <Switcher
              ids={['notificationsAgree', 'notificationsDecline']}
              name={'notifications'}
              values={[
                'I want to receive notifications about promo, sales, etc.',
                'I don’t want to receive notifications about promo, sales, etc.',
              ]}
              agreeRadioRef={this.agreeRadioRef}
              refuseRadioRef={this.refuseRadioRef}
            />

            <FileBlock
              id="avatar"
              label="Upload avatar:"
              fileType="image/*"
              reference={this.fileRef}
            />

            <button type="submit" ref={this.buttonRef}>
              Submit
            </button>
          </fieldset>
        </form>
        <div className={styles.cardsWrapper}>
          {formDataList.map((formData, index) => (
            <DeliveryCard key={index} formData={formData} />
          ))}
        </div>
      </div>
    );
  }
}

export default DeliveryForm;
