import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import { SelectBlock } from 'components/delivery/form-components/SelectBlock/SelectBlock';

describe('SelectBlock component', () => {
  it('renders correctly with passed props', () => {
    const selectRef = createRef<HTMLSelectElement>();
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const { getByText, getByRole } = render(
      <SelectBlock id="test-select" label="Test label" options={options} reference={selectRef} />
    );

    const label = getByText('Test label');
    const select = getByRole('combobox');
    const option1 = getByText('Option 1');
    const option2 = getByText('Option 2');
    const option3 = getByText('Option 3');

    expect(label).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });
});
