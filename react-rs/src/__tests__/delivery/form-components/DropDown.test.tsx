import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DropDown } from 'components/delivery/form-components/DropDown/DropDown';

describe('DropDown component', () => {
  it('renders properly with props', () => {
    const inputRef = React.createRef<HTMLInputElement>();
    const dataListRef = React.createRef<HTMLDataListElement>();
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const { getByLabelText } = render(
      <DropDown
        inputID="test-input"
        dataListID="test-datalist"
        label="Test label"
        options={options}
        inputRef={inputRef}
        dataListRef={dataListRef}
      />
    );

    const label = getByLabelText('Test label');
    const input = getByLabelText('Test label').closest('input');

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toBe(inputRef.current);
  });

  it('displays all options after focus on input element', () => {
    const inputRef = React.createRef<HTMLInputElement>();
    const dataListRef = React.createRef<HTMLDataListElement>();
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const { getByLabelText } = render(
      <DropDown
        inputID="test-input"
        dataListID="test-datalist"
        label="Test label"
        options={options}
        inputRef={inputRef}
        dataListRef={dataListRef}
      />
    );

    const input = getByLabelText('Test label').closest('input');

    if (input !== null) {
      fireEvent.focus(input);

      const dataListElem = dataListRef.current;
      const optionsList = dataListElem?.querySelectorAll('option') ?? null;

      expect(optionsList).toHaveLength(options.length);

      if (optionsList !== null)
        optionsList.forEach((option, index) => {
          expect(option).toHaveValue(options[index]);
        });
    }
  });
});
