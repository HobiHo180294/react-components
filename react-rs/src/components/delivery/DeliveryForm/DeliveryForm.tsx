// ! PREVIOUS IMPLEMENTATION

// import React, { Component, createRef, FormEvent, RefObject } from 'react';
// import { CheckBox } from '../form-components/CheckBox/CheckBox';
// import { DateBlock } from '../form-components/DateBlock/DateBlock';
// import { DropDown } from '../form-components/DropDown/DropDown';
// import { FileBlock } from '../form-components/FileBlock/FileBlock';
// import { SelectBlock } from '../form-components/SelectBlock/SelectBlock';
// import { TextBlock } from '../form-components/TextBlock/TextBlock';
// import { DeliveryCard } from '../DeliveryCard/DeliveryCard';
// import { Switcher } from '../form-components/Switcher/Switcher';
// import styles from './DeliveryForm.module.scss';

// export const validateFullname = (fullNameVal: string): boolean => {
//   const fullNameRegex = /^[A-Z][a-z]* [A-Z][a-z]*$/;
//   return fullNameRegex.test(fullNameVal);
// };

// export const validateEmptyFields = (formElements: HTMLFormControlsCollection): boolean => {
//   let isValidate = true;
//   for (let i = 0; i < formElements.length; i++) {
//     const element = formElements[i];
//     const elementType = (element as HTMLElement).tagName.toLowerCase();

//     switch (elementType) {
//       case 'input': {
//         if ((element as HTMLInputElement).type === 'checkbox') {
//           if (!(element as HTMLInputElement).checked) isValidate = false;
//         } else if ((element as HTMLInputElement).value.trim() === '') isValidate = false;
//         break;
//       }
//     }
//   }

//   return isValidate;
// };

// const countryOptions = ['Ukraine', 'Poland', 'Germany', 'Estonia', 'USA'];
// const stateOptions = ['Kyiv', 'Warsaw', 'Berlin', 'Tallinn', 'Washington'];

// export interface IDeliveryFormState {
//   fullName: string;
//   zipCode: string;
//   birthDate: string;
//   deliveryDate: string;
//   country: string;
//   state: string;
//   agreePersonalData: boolean;
//   needExtraPresents: boolean;
//   gender: string;
//   notifications: string;
//   avatar: File | null;
// }

// interface IDeliveryFormStateWithSubmit extends IDeliveryFormState {
//   submitted: boolean;
//   formDataList: IDeliveryFormState[] | [];
// }

// export class DeliveryForm extends Component<Record<string, unknown>, IDeliveryFormStateWithSubmit> {
//   private formRef: React.RefObject<HTMLFormElement> = createRef();
//   private fieldsetRef: RefObject<HTMLFieldSetElement> = createRef();
//   private fullNameRef: RefObject<HTMLInputElement> = createRef();
//   private zipCodeRef: RefObject<HTMLInputElement> = createRef();
//   private birthDateRef: RefObject<HTMLInputElement> = createRef();
//   private deliveryDateRef: RefObject<HTMLInputElement> = createRef();
//   private countriesInputRef: RefObject<HTMLInputElement> = createRef();
//   private countriesListRef: RefObject<HTMLDataListElement> = createRef();
//   private statesListRef: RefObject<HTMLSelectElement> = createRef();
//   private agreeCheckboxRef: RefObject<HTMLInputElement> = createRef();
//   private extraCheckboxRef: RefObject<HTMLInputElement> = createRef();
//   private maleRadioRef: RefObject<HTMLInputElement> = createRef();
//   private femaleRadioRef: RefObject<HTMLInputElement> = createRef();
//   private agreeRadioRef: RefObject<HTMLInputElement> = createRef();
//   private refuseRadioRef: RefObject<HTMLInputElement> = createRef();
//   private fileRef: RefObject<HTMLInputElement> = createRef();
//   private buttonRef: RefObject<HTMLButtonElement> = createRef();
//   private switchGenderRef: RefObject<Switcher> = createRef();
//   private switchNotificationRef: RefObject<Switcher> = createRef();

//   constructor(props: Record<string, unknown>) {
//     super(props);
//     this.state = {
//       fullName: '',
//       zipCode: '',
//       birthDate: '',
//       deliveryDate: '',
//       country: '',
//       state: '',
//       agreePersonalData: false,
//       needExtraPresents: false,
//       gender: 'male',
//       notifications: 'I want to receive notifications about promo, sales, etc.',
//       avatar: null,
//       submitted: false,
//       formDataList: [],
//     };
//   }

//   handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const avatarImage = this.fileRef.current?.files?.[0] || null;

//     const formData: IDeliveryFormState = {
//       fullName: this.fullNameRef.current?.value ?? this.state.fullName,
//       zipCode: this.zipCodeRef.current?.value ?? this.state.zipCode,
//       birthDate: this.birthDateRef.current?.value ?? this.state.birthDate,
//       deliveryDate: this.deliveryDateRef.current?.value ?? this.state.deliveryDate,
//       country: this.countriesInputRef.current?.value ?? this.state.country,
//       state: this.statesListRef.current?.value ?? this.state.state,
//       agreePersonalData: this.agreeCheckboxRef.current?.checked ?? this.state.agreePersonalData,
//       needExtraPresents: this.extraCheckboxRef.current?.checked ?? this.state.needExtraPresents,
//       gender:
//         this.maleRadioRef.current?.value || this.femaleRadioRef.current?.value || this.state.gender,
//       notifications:
//         this.agreeRadioRef.current?.value ||
//         this.refuseRadioRef.current?.value ||
//         this.state.notifications,
//       avatar: avatarImage ?? this.state.avatar,
//     };

//     if (this.formRef.current) {
//       const fullName = formData.fullName;
//       const formElements = this.formRef.current?.elements;

//       if (formElements) {
//         if (!validateFullname(fullName)) {
//           alert(
//             'Please enter your full name (name and surname) with each word starting with a capital letter!'
//           );
//           return;
//         }

//         if (!validateEmptyFields(formElements)) {
//           alert('Please fill in all fields!');
//           return;
//         }

//         if (validateFullname(fullName) && validateEmptyFields(formElements)) {
//           this.formRef.current?.reset();
//           this.fileRef.current!.value = '';
//           this.switchGenderRef.current?.reset();
//           this.switchNotificationRef.current?.reset();
//           alert('Your data has been saved!');
//         }
//       }
//     }

//     this.setState((prevState) => ({
//       ...prevState,
//       formDataList: [...prevState.formDataList, formData],
//     }));
//   };

//   render() {
//     const { formDataList } = this.state;

//     return (
//       <div className={styles.formWrapper}>
//         <form className={styles.form} onSubmit={this.handleSubmit} ref={this.formRef}>
//           <fieldset className={styles.fieldset} ref={this.fieldsetRef}>
//             <TextBlock id="fullName" label="Full name:" reference={this.fullNameRef} />
//             <TextBlock id="zip" label="Zip-code:" reference={this.zipCodeRef} />

//             <DateBlock id="birthDate" label="Birth date:" reference={this.birthDateRef} />
//             <DateBlock id="deliveryDate" label="Delivery date:" reference={this.deliveryDateRef} />

//             <DropDown
//               inputID="countries"
//               dataListID="countries-list"
//               label="Select a country:"
//               options={countryOptions}
//               inputRef={this.countriesInputRef}
//               dataListRef={this.countriesListRef}
//             />

//             <SelectBlock
//               id="states"
//               label="Select a state:"
//               options={stateOptions}
//               reference={this.statesListRef}
//             />

//             <CheckBox
//               id="agree"
//               label="I consent to my personal data"
//               reference={this.agreeCheckboxRef}
//             />
//             <CheckBox
//               id="extra"
//               label="I would like to choose several elements from the list"
//               reference={this.extraCheckboxRef}
//             />

//             <Switcher
//               ref={this.switchGenderRef}
//               ids={['maleID', 'femaleID']}
//               name={'gender'}
//               values={['male', 'female']}
//               agreeRadioRef={this.maleRadioRef}
//               refuseRadioRef={this.femaleRadioRef}
//             />
//             <Switcher
//               ref={this.switchNotificationRef}
//               ids={['notificationsAgree', 'notificationsDecline']}
//               name={'notifications'}
//               values={[
//                 'I want to receive notifications about promo, sales, etc.',
//                 'I don’t want to receive notifications about promo, sales, etc.',
//               ]}
//               agreeRadioRef={this.agreeRadioRef}
//               refuseRadioRef={this.refuseRadioRef}
//             />

//             <FileBlock
//               id="avatar"
//               label="Upload avatar:"
//               fileType="image/*"
//               reference={this.fileRef}
//             />

//             <button type="submit" ref={this.buttonRef}>
//               Submit
//             </button>
//           </fieldset>
//         </form>
//         <div className={styles.cardsWrapper}>
//           {formDataList.map((formData, index) => (
//             <DeliveryCard key={index} formData={formData} />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// ! NEW IMPLEMENTATION
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextBlock } from '../form-components/TextBlock/TextBlock';
import styles from './DeliveryForm.module.scss';
import { DateBlock } from '../form-components/DateBlock/DateBlock';
import { DropDown } from '../form-components/DropDown/DropDown';
import { SelectBlock } from '../form-components/SelectBlock/SelectBlock';
import { CheckBox } from '../form-components/CheckBox/CheckBox';
import { ISwitcher, Switcher } from '../form-components/Switcher/Switcher';
import { FileBlock } from '../form-components/FileBlock/FileBlock';
import { IDeliveryFormData } from './DeliveryForm.service';
import { DeliveryCard } from '../DeliveryCard/DeliveryCard';

export const DeliveryForm = () => {
  const { handleSubmit } = useForm();
  const [formData, setFormData] = useState<null | IDeliveryFormData>(null);

  // * REFS
  const formRef = useRef<HTMLFormElement>(null);
  const fieldsetRef = useRef<HTMLFieldSetElement>(null);

  const fullNameRef = useRef<HTMLInputElement>(null);
  const zipCodeRef = useRef<HTMLInputElement>(null);

  const birthDateRef = useRef<HTMLInputElement>(null);
  const deliveryDateRef = useRef<HTMLInputElement>(null);

  const countriesInputRef = useRef<HTMLInputElement>(null);
  const countriesListRef = useRef<HTMLDataListElement>(null);
  const statesListRef = useRef<HTMLSelectElement>(null);

  const agreeCheckboxRef = useRef<HTMLInputElement>(null);
  const extraCheckboxRef = useRef<HTMLInputElement>(null);

  const maleRadioRef = useRef<HTMLInputElement>(null);
  const femaleRadioRef = useRef<HTMLInputElement>(null);
  const switchGenderRef = useRef<ISwitcher>(null);

  const agreeRadioRef = useRef<HTMLInputElement>(null);
  const refuseRadioRef = useRef<HTMLInputElement>(null);
  const switchNotificationsRef = useRef<ISwitcher>(null);

  const fileRef = useRef<HTMLInputElement>(null);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const getData = (): IDeliveryFormData => {
    const avatarImage = fileRef.current?.files?.[0] || null;

    return {
      fullName: fullNameRef.current?.value ?? '',
      zipCode: zipCodeRef.current?.value ?? '',
      birthDate: birthDateRef.current?.value ?? '',
      deliveryDate: deliveryDateRef.current?.value ?? '',
      country: countriesInputRef.current?.value ?? '',
      state: statesListRef.current?.value ?? '',
      agreePersonalData: agreeCheckboxRef.current?.checked ?? false,
      needExtraPresents: extraCheckboxRef.current?.checked ?? false,
      gender: maleRadioRef.current?.value || femaleRadioRef.current?.value || 'male',
      notifications:
        agreeRadioRef.current?.value ||
        refuseRadioRef.current?.value ||
        'I want to receive notifications about promo, sales, etc.',
      avatar: avatarImage,
    };
  };

  const onSubmit = () => {
    const formData = getData();

    console.log(formData);

    setFormData(formData);
  };

  // * MOCK DATA
  const countryOptions = ['Ukraine', 'Poland', 'Germany', 'Estonia', 'USA'];
  const stateOptions = ['Kyiv', 'Warsaw', 'Berlin', 'Tallinn', 'Washington'];

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <fieldset className={styles.fieldset} ref={fieldsetRef}>
        <TextBlock id="text" label="Fullname:" reference={fullNameRef} />
        <TextBlock id="zip" label="Zip-code:" reference={zipCodeRef} />

        <DateBlock id="birthDate" label="Birth date:" reference={birthDateRef} />
        <DateBlock id="deliveryDate" label="Delivery date:" reference={deliveryDateRef} />

        <DropDown
          inputID="countries"
          dataListID="countries-list"
          label="Select a country:"
          options={countryOptions}
          inputRef={countriesInputRef}
          dataListRef={countriesListRef}
        />

        <SelectBlock
          id="states"
          label="Select a state:"
          options={stateOptions}
          reference={statesListRef}
        />

        <CheckBox id="agree" label="I consent to my personal data" reference={agreeCheckboxRef} />
        <CheckBox
          id="extra"
          label="I would like to choose several elements from the list"
          reference={extraCheckboxRef}
        />

        <Switcher
          ref={switchGenderRef}
          ids={['maleID', 'femaleID']}
          name={'gender'}
          values={['male', 'female']}
          agreeRadioRef={maleRadioRef}
          refuseRadioRef={femaleRadioRef}
        />

        <Switcher
          ref={switchNotificationsRef}
          ids={['notificationsAgree', 'notificationsDecline']}
          name={'notifications'}
          values={[
            'I want to receive notifications about promo, sales, etc.',
            'I don’t want to receive notifications about promo, sales, etc.',
          ]}
          agreeRadioRef={agreeRadioRef}
          refuseRadioRef={refuseRadioRef}
        />

        <FileBlock id="avatar" label="Upload avatar:" fileType="image/*" reference={fileRef} />

        <button type="submit" ref={buttonRef}>
          Submit
        </button>
      </fieldset>
      {formData && <DeliveryCard formData={formData} />}
    </form>
  );
};
