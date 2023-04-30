import React from 'react';
import { render } from '@testing-library/react';
import { DeliveryCard } from 'components/delivery/DeliveryCard/DeliveryCard';

describe('DeliveryCard component', () => {
  const mockFormData = {
    fullName: 'John Doe',
    zipCode: '12345',
    birthDate: '2000-01-01',
    deliveryDate: '2000-02-01',
    country: 'Ukraine',
    state: 'Kyiv',
    agreePersonalData: true,
    needExtraPresents: false,
    gender: 'male',
    notifications: 'I want to receive notifications about promo, sales, etc.',
    avatar: new File([new Blob()], 'test.png', { type: 'image/png' }),
  };

  const mockCreateObjectURL = jest.fn();
  Object.defineProperty(window, 'URL', {
    value: {
      createObjectURL: mockCreateObjectURL,
    },
  });

  mockCreateObjectURL.mockReturnValue('test-url');

  it('should be rendered with the given form data', () => {
    const { getByText, getByAltText } = render(<DeliveryCard formData={mockFormData} />);

    expect(getByText('fullName:')).toBeInTheDocument();
    expect(getByText(mockFormData.fullName)).toBeInTheDocument();
    expect(getByText('zipCode:')).toBeInTheDocument();
    expect(getByText(mockFormData.zipCode)).toBeInTheDocument();
    expect(getByText('birthDate:')).toBeInTheDocument();
    expect(getByText(mockFormData.birthDate)).toBeInTheDocument();
    expect(getByText('deliveryDate:')).toBeInTheDocument();
    expect(getByText(mockFormData.deliveryDate)).toBeInTheDocument();
    expect(getByText('country:')).toBeInTheDocument();
    expect(getByText(mockFormData.country)).toBeInTheDocument();
    expect(getByText('state:')).toBeInTheDocument();
    expect(getByText(mockFormData.state)).toBeInTheDocument();
    expect(getByText('agreePersonalData:')).toBeInTheDocument();
    expect(getByText(mockFormData.agreePersonalData === true ? 'Yes' : 'No')).toBeInTheDocument();
    expect(getByText('needExtraPresents:')).toBeInTheDocument();
    expect(getByText(mockFormData.needExtraPresents === true ? 'Yes' : 'No')).toBeInTheDocument();
    expect(getByText('gender:')).toBeInTheDocument();
    expect(getByText(mockFormData.gender)).toBeInTheDocument();
    expect(getByText('notifications:')).toBeInTheDocument();
    expect(getByText(mockFormData.notifications)).toBeInTheDocument();
    expect(getByText('avatar:')).toBeInTheDocument();
    expect(getByText('avatar:')).toBeInTheDocument();
    expect(getByAltText('Avatar')).toBeInTheDocument();
  });
});
