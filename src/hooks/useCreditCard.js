import { useState, useEffect } from 'react';
import {
  NUMBER_REGEX,
  DATE_REGEX,
  CVC_REGEX,
  FOUR_DIGITS,
  TWO_DIGITS,
  NUMBER_LENGTH,
  DATE_LENGTH,
  CVC_LENGTH,
  NUMBER,
  DATE,
  CVC,
  VISA,
  MASTERCARD,
  NONE,
  MASTERCARD_IIN,
  VISA_IIN,
} from '../utils/constants';

export const useCreditCard = () => {
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    if (
      name === NUMBER &&
      NUMBER_REGEX.test(value) &&
      value.length <= NUMBER_LENGTH
    ) {
      if (value.length > 1) setNumber(value.match(FOUR_DIGITS).join(' '));
      else setNumber(value);
    } else if (
      name === DATE &&
      DATE_REGEX.test(value) &&
      value.length <= DATE_LENGTH
    ) {
      if (value.length >= 1) setDate(value.match(TWO_DIGITS).join('/'));
      else setDate(value);
    } else if (
      name === CVC &&
      CVC_REGEX.test(value) &&
      value.length <= CVC_LENGTH
    )
      setCvc(value);
  };

  const getCardProvider = () => {
    if (MASTERCARD_IIN.includes(number.slice(0, 2))) return MASTERCARD;
    else if (VISA_IIN.includes(number.slice(0, 1))) return VISA;
    else return NONE;
  };

  const validateCardDate = () => {
    const year = new Date().toISOString().slice(2, 4);
    const month = new Date().toISOString().slice(5, 7);

    if (date.length === DATE_LENGTH) {
      if (date.slice(0, 2) > 12) return 'incorrectDateValidateMessage';
      else if (
        date.slice(3, 5) < year ||
        (date.slice(3, 5) === year && date.slice(0, 2) < month)
      )
        return 'outOfDateValidateMessage';
    }
  };

  useEffect(() => {}, [number, date, cvc]);

  return { handleChange, number, date, cvc, getCardProvider, validateCardDate };
};
