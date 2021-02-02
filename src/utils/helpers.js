import { NUMBER_LENGTH, DATE_LENGTH, CVC_LENGTH } from './constants';

export const isFormComplete = (number, date, cvc, isError, isCardProvider) => {
  if (
    number.length === NUMBER_LENGTH &&
    date.length === DATE_LENGTH &&
    cvc.length === CVC_LENGTH &&
    !isError() &&
    isCardProvider()
  )
    return true;
  else return false;
};

export const getErrorMessage = (validateCardDate, cardProvider, number) => {
  if (validateCardDate() === 'incorrectDateValidateMessage')
    return 'incorrectDateValidateMessage';
  else if (validateCardDate() === 'outOfDateValidateMessage')
    return 'outOfDateValidateMessage';
  else if (!cardProvider() && number.length === NUMBER_LENGTH)
    return 'incorrectNumberValidateMessage';
  else return null;
};
