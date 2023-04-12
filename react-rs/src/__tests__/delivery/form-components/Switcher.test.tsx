import React, { createRef } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Switcher } from 'components/delivery/form-components/Switcher/Switcher';

interface ISelectRadioAndAssert {
  getByLabelText: (text: string) => HTMLElement;
  selectedRadio: string;
  selectedRef: React.RefObject<HTMLInputElement>;
  unselectedRef: React.RefObject<HTMLInputElement>;
}

function selectRadioAndAssert(radioButtonSelection: ISelectRadioAndAssert): void {
  const { getByLabelText, selectedRadio, selectedRef, unselectedRef } = radioButtonSelection;

  const selectedRadioButton = getByLabelText(selectedRadio);
  fireEvent.click(selectedRadioButton);

  expect(selectedRef.current?.checked).toBe(true);
  expect(unselectedRef.current?.checked).toBe(false);
}

describe('Switcher component', () => {
  it('should render two radio buttons with labels', () => {
    const agreeRadioRef = createRef<HTMLInputElement>();
    const refuseRadioRef = createRef<HTMLInputElement>();

    const { getByLabelText } = render(
      <Switcher
        ids={['agree', 'refuse']}
        name="decision"
        values={['Agree', 'Refuse']}
        agreeRadioRef={agreeRadioRef}
        refuseRadioRef={refuseRadioRef}
      />
    );

    expect(getByLabelText('Agree')).toBeInTheDocument();
    expect(getByLabelText('Refuse')).toBeInTheDocument();
  });

  it('should check the first radio button by default', () => {
    const agreeRadioRef = createRef<HTMLInputElement>();
    const refuseRadioRef = createRef<HTMLInputElement>();

    render(
      <Switcher
        ids={['agree', 'refuse']}
        name="decision"
        values={['Agree', 'Refuse']}
        agreeRadioRef={agreeRadioRef}
        refuseRadioRef={refuseRadioRef}
      />
    );

    expect(agreeRadioRef.current?.checked).toBe(true);
    expect(refuseRadioRef.current?.checked).toBe(false);
  });

  it('should switch the selected radio button when clicked', () => {
    const agreeRadioRef = createRef<HTMLInputElement>();
    const refuseRadioRef = createRef<HTMLInputElement>();

    const { getByLabelText } = render(
      <Switcher
        ids={['agree', 'refuse']}
        name="decision"
        values={['Agree', 'Refuse']}
        agreeRadioRef={agreeRadioRef}
        refuseRadioRef={refuseRadioRef}
      />
    );

    selectRadioAndAssert({
      getByLabelText,
      selectedRadio: 'Refuse',
      selectedRef: refuseRadioRef,
      unselectedRef: agreeRadioRef,
    });

    selectRadioAndAssert({
      getByLabelText,
      selectedRadio: 'Agree',
      selectedRef: agreeRadioRef,
      unselectedRef: refuseRadioRef,
    });
  });
});
