import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import { DateBlock } from 'components/delivery/form-components/DateBlock/DateBlock';

describe('DateBlock component', () => {
  it('renders correctly with passed props', () => {
    const ref = createRef<HTMLInputElement>();

    const { getByLabelText } = render(<DateBlock id="test" label="Test label" reference={ref} />);

    const label = getByLabelText('Test label');
    const input = getByLabelText('Test label').closest('input');

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
