import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import { TextBlock } from '../../../components/delivery/form-components/TextBlock/TextBlock';

describe('TextBlock component', () => {
  it('renders correctly with passed props', () => {
    const ref = createRef<HTMLInputElement>();

    const { getByLabelText } = render(<TextBlock id="test" label="Test label" reference={ref} />);
    const label = getByLabelText('Test label');
    const input = getByLabelText('Test label').closest('input');

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).not.toHaveAttribute('ref');
  });

  it('passes the reference prop to the input element', () => {
    const ref = createRef<HTMLInputElement>();
    const { getByLabelText } = render(<TextBlock id="test" label="Test label" reference={ref} />);
    const input = getByLabelText('Test label').closest('input');

    expect(input).toBe(ref.current);
  });
});
