import styled from 'styled-components';
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa';
import { FiCreditCard } from 'react-icons/fi';

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
  color: #000000;

  @media (max-width: 600px) {
    padding: 2rem;
  }
`;

export const CreditCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 12px solid #eceff2;
  padding: 0.5em;

  @media (max-width: 470px) {
    flex-direction: column;
  }
`;

export const ErrorNotification = styled.p`
  color: red;
  font-size: 0.8em;
  padding: 0.5em;
`;

export const SuccessNotification = styled(ErrorNotification)`
  color: green;
`;

export const Mastercard = styled(FaCcMastercard)`
  font-size: 1.7em;
`;

export const Visa = styled(FaCcVisa)`
  font-size: 1.7em;
`;

export const Empty = styled(FiCreditCard)`
  font-size: 1.7em;
`;

export const CardInput = styled.input`
  border: none;
  outline: none;

  @media (max-width: 470px) {
    text-align: center;
  }
`;

export const CardNumber = styled(CardInput)`
  width: 170px;
  margin-left: 1em;

  @media (max-width: 470px) {
    margin: 0.5em 0;
  }
`;

export const CardDate = styled(CardInput)`
  width: 70px;
`;

export const CardCvc = styled(CardInput)`
  margin-left: 1em;
  width: 70px;

  @media (max-width: 470px) {
    margin: 0.5em 0;
  }
`;
