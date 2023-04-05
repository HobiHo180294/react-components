import React from 'react';
import user from '@testing-library/user-event';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { DeliveryForm } from 'components/delivery/DeliveryForm/DeliveryForm';
import {
  validateEmptyFields,
  validateFullname,
} from '../../../components/delivery/DeliveryForm/utils';

describe('DeliveryForm component', () => {
  it('should render all form fields', () => {
    const { getByLabelText } = render(<DeliveryForm />);

    expect(getByLabelText('Fullname:')).toBeInTheDocument();
    expect(getByLabelText('Zip-code:')).toBeInTheDocument();
    expect(getByLabelText('Birth date:')).toBeInTheDocument();
    expect(getByLabelText('Delivery date:')).toBeInTheDocument();
    expect(getByLabelText('Select a country:')).toBeInTheDocument();
    expect(getByLabelText('Select a state:')).toBeInTheDocument();
    expect(getByLabelText('I consent to my personal data')).toBeInTheDocument();
    expect(
      getByLabelText('I would like to choose several elements from the list')
    ).toBeInTheDocument();
    expect(getByLabelText('male')).toBeInTheDocument();
    expect(getByLabelText('female')).toBeInTheDocument();
    expect(
      getByLabelText('I want to receive notifications about promo, sales, etc.')
    ).toBeInTheDocument();
    expect(
      getByLabelText('I don’t want to receive notifications about promo, sales, etc.')
    ).toBeInTheDocument();
    expect(getByLabelText('Upload avatar:')).toBeInTheDocument();
  });

  it('submits form with all necessary data and resets then all field', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const mockCreateObjectURL = jest.fn();
    Object.defineProperty(global.URL, 'createObjectURL', { value: mockCreateObjectURL });

    const { getByLabelText, getByRole } = render(<DeliveryForm />);

    const fullNameInput = getByLabelText('Fullname:') as HTMLInputElement;
    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
    expect(fullNameInput.value).toBe('John Doe');

    const zipInput = getByLabelText('Zip-code:') as HTMLInputElement;
    fireEvent.change(zipInput, { target: { value: '12345' } });
    expect(zipInput.value).toBe('12345');

    const birthDateInput = getByLabelText('Birth date:') as HTMLInputElement;
    fireEvent.change(birthDateInput, { target: { value: '2000-01-01' } });
    expect(birthDateInput.value).toBe('2000-01-01');

    const deliveryDateInput = getByLabelText('Delivery date:') as HTMLInputElement;
    fireEvent.change(deliveryDateInput, { target: { value: '2000-01-02' } });
    expect(deliveryDateInput.value).toBe('2000-01-02');

    const countryInput = getByLabelText('Select a country:') as HTMLInputElement;
    fireEvent.change(countryInput, { target: { value: 'Ukraine' } });
    expect(countryInput.value).toBe('Ukraine');

    const stateSelect = getByLabelText('Select a state:') as HTMLSelectElement;
    fireEvent.change(stateSelect, { target: { value: 'Berlin' } });
    expect(stateSelect.value).toBe('Berlin');

    const agreeCheckbox = getByLabelText('I consent to my personal data') as HTMLInputElement;
    fireEvent.click(agreeCheckbox);
    expect(agreeCheckbox.checked).toBe(true);

    const extraCheckbox = getByLabelText(
      'I would like to choose several elements from the list'
    ) as HTMLInputElement;
    fireEvent.click(extraCheckbox);
    expect(extraCheckbox.checked).toBe(true);

    const genderRadio = getByLabelText('female') as HTMLInputElement;
    fireEvent.click(genderRadio);
    expect(genderRadio.checked).toBe(true);

    const notificationsRadio = getByLabelText(
      'I don’t want to receive notifications about promo, sales, etc.'
    ) as HTMLInputElement;
    fireEvent.click(notificationsRadio);
    expect(notificationsRadio.checked).toBe(true);

    const avatarInput = getByLabelText('Upload avatar:') as HTMLInputElement;
    const avatarImage = new File([new Blob()], 'avatar.png', { type: 'image/png' });

    await user.upload(avatarInput, avatarImage);

    await waitFor(() => {
      expect(avatarInput.files?.length).toBe(1);
    });

    const submitButton = getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith('Your data has been saved!');
      expect(fullNameInput.value).toBe('');
      expect(birthDateInput.value).toBe('');
      expect(deliveryDateInput.value).toBe('');
      expect(countryInput.value).toBe('');
      expect(stateSelect.value).toBe('Kyiv');
      expect(agreeCheckbox.checked).toBe(false);
      expect(extraCheckbox.checked).toBe(false);
      expect(genderRadio.checked).toBe(false);
      expect(notificationsRadio.checked).toBe(false);
      expect(avatarInput.files?.length).toBe(0);
    });
  });
});

describe('full name validation', () => {
  it('should return true for a valid full name', () => {
    expect(validateFullname('John Doe')).toBe(true);
  });

  it('should return false for a full name with lowercase letters', () => {
    expect(validateFullname('john doe')).toBe(false);
  });

  it('should return false for a full name with only one word', () => {
    expect(validateFullname('John')).toBe(false);
  });

  it('returns false for a full name with non-alphabetic characters', () => {
    expect(validateFullname('John 123')).toBe(false);
  });
});

describe('empty fields validation', () => {
  it('should return true when all input fields are filled', () => {
    const mockForm = document.createElement('form');
    const mockInput = document.createElement('input');
    mockInput.value = 'test';
    mockForm.appendChild(mockInput);
    expect(validateEmptyFields(mockForm.elements)).toBe(true);
  });

  it('should return false when at least one input field is empty', () => {
    const mockForm = document.createElement('form');
    const mockInput = document.createElement('input');
    mockForm.appendChild(mockInput);
    expect(validateEmptyFields(mockForm.elements)).toBe(false);
  });

  test('should not ignore checkboxes that are not checked', () => {
    const mockForm = document.createElement('form');
    const mockCheckbox = document.createElement('input');
    mockCheckbox.type = 'checkbox';
    mockForm.appendChild(mockCheckbox);
    expect(validateEmptyFields(mockForm.elements)).toBe(false);
  });
});
