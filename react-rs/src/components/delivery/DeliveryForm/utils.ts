export const validateFullname = (fullNameVal: string): boolean => {
  const fullNameRegex = /^[A-Z][a-z]* [A-Z][a-z]*$/;
  return fullNameRegex.test(fullNameVal);
};

export const validateEmptyFields = (formElements: HTMLFormControlsCollection): boolean => {
  let isValidate = true;
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    const elementType = (element as HTMLElement).tagName.toLowerCase();

    switch (elementType) {
      case 'input': {
        if ((element as HTMLInputElement).type === 'checkbox') {
          if (!(element as HTMLInputElement).checked) isValidate = false;
        } else if ((element as HTMLInputElement).value.trim() === '') isValidate = false;
        break;
      }
    }
  }

  return isValidate;
};
