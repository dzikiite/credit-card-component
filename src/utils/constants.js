export const NUMBER = 'number';
export const DATE = 'date';
export const CVC = 'cvc';
export const NUMBER_LENGTH = 19;
export const DATE_LENGTH = 5;
export const CVC_LENGTH = 3;

export const NUMBER_REGEX = /^[\d ]*$/;
export const CVC_REGEX = /^\d*$/;
export const DATE_REGEX = /^[\d/]*$/;
export const FOUR_DIGITS = /\d{1,4}/g;
export const TWO_DIGITS = /\d{1,2}/g;

export const VISA = 'visa';
export const MASTERCARD = 'mastercard';
export const NONE = '';

export const MASTERCARD_IIN = ['51', '52', '53', '54', '55'];
export const VISA_IIN = ['4'];