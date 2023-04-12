import React from 'react';
import { render, screen } from '@testing-library/react';
import { CheckBox } from 'components/delivery/form-components/CheckBox/CheckBox';

describe('CheckBox component', () => {
  it('renders the checkbox with label text', () => {
    const ref = React.createRef<HTMLInputElement>();
    const labelText = 'Test label';

    render(<CheckBox id="test-checkbox" label={labelText} reference={ref} />);

    const checkbox = screen.getByRole('checkbox', { name: labelText });
    expect(checkbox).toBeInTheDocument();
  });
});
