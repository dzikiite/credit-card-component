import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useCreditCard } from '../../hooks/useCreditCard';
import { NUMBER, DATE, CVC, NUMBER_LENGTH } from '../../utils/constants';

import { 
    Container,
    CreditCard,
    Mastercard,
    Visa,
    Empty,
    CardNumber,
    CardDate,
    CardCvc } from './CreditCardForm.elements';

const CreditCardForm = () => {
    const { t } = useTranslation();
    const dateInput = useRef(null);
    const cvcInput = useRef(null);
    const { number, date, cvc, handleChange } = useCreditCard();

    if (number.length === NUMBER_LENGTH) dateInput.current.focus();

    return (
        <Container>
            <CreditCard>
                <Mastercard />
                <Visa />
                <Empty />
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
        </Container>
    );
}
 
export default CreditCardForm;