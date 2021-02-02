import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useCreditCard } from '../../hooks/useCreditCard';
import {
  NUMBER,
  DATE,
  CVC,
  NUMBER_LENGTH,
  DATE_LENGTH,
} from '../../utils/constants';
import { isFormComplete, getErrorMessage } from '../../utils/helpers';

import {
  Container,
  CreditCard,
  Mastercard,
  Visa,
  Empty,
  CardNumber,
  CardDate,
  CardCvc,
  ErrorNotification,
  SuccessNotification,
} from './CreditCardForm.elements';

const CreditCardForm = () => {
  const { t } = useTranslation();
  const dateInput = useRef(null);
  const cvcInput = useRef(null);
  const {
    number,
    date,
    cvc,
    handleChange,
    getCardProvider,
    validateCardDate,
  } = useCreditCard();

  if (number.length === NUMBER_LENGTH) dateInput.current.focus();
  if (date.length === DATE_LENGTH && number.length === NUMBER_LENGTH)
    cvcInput.current.focus();

  const creditCardImage = getCardProvider() ? (
    getCardProvider() === 'mastercard' ? (
      <Mastercard />
    ) : (
      <Visa />
    )
  ) : (
    <Empty />
  );

  const errorInfo = (
    <ErrorNotification>
      {t(getErrorMessage(validateCardDate, getCardProvider, number))}
    </ErrorNotification>
  );

  const successInfo = isFormComplete(number, date, cvc, validateCardDate) ? (
    <SuccessNotification>{t('cardValidateSuccess')}</SuccessNotification>
  ) : null;

  return (
    <Container>
      <CreditCard>
        {creditCardImage}
        <CardNumber
          value={number}
          onChange={handleChange}
          placeholder={t('cardNumber')}
          name={NUMBER}
        />
        <CardDate
          value={date}
          onChange={handleChange}
          ref={dateInput}
          placeholder={t('date')}
          name={DATE}
        />
        <CardCvc
          value={cvc}
          onChange={handleChange}
          ref={cvcInput}
          placeholder="CVC"
          name={CVC}
        />
      </CreditCard>
      {errorInfo}
      {successInfo}
    </Container>
  );
};

export default CreditCardForm;
