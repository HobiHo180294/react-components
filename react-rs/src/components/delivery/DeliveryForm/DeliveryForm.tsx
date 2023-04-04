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
import { validateEmptyFields, validateFullname } from './utils';

export const DeliveryForm = () => {
  const { handleSubmit } = useForm();
  // const [formData, setFormData] = useState<null | IDeliveryFormData>(null);
  const [formDataList, setFormDataList] = useState<IDeliveryFormData[]>([]);

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
      gender: switchGenderRef.current?.getCurrentValue() ?? 'male',
      notifications:
        switchNotificationsRef.current?.getCurrentValue() ??
        'I want to receive notifications about promo, sales, etc.',
      avatar: avatarImage,
    };
  };

  const onSubmit = () => {
    const formData = getData();

    if (formRef.current) {
      const fullName = formData.fullName;
      const formElements = formRef.current.elements;

      if (formElements) {
        if (!validateFullname(fullName)) {
          alert(
            'Please enter your full name (name and surname) with each word starting with a capital letter!'
          );
          return;
        }

        if (!validateEmptyFields(formElements)) {
          alert('Please fill in all fields!');
          return;
        }

        if (validateFullname(fullName) && validateEmptyFields(formElements)) {
          formRef.current?.reset();
          fileRef.current!.value = '';
          switchGenderRef.current?.reset();
          switchNotificationsRef.current?.reset();
          alert('Your data has been saved!');
        }
      }
    }

    // setFormData(formData);
    setFormDataList((prevList) => [...prevList, formData]);
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
      {formDataList.map((formData) => {
        return (
          <DeliveryCard key={`${formData.fullName} + ${formData.birthDate}`} formData={formData} />
        );
      })}
    </form>
  );
};
