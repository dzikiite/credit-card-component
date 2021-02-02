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
`

export const CreditCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 12px solid #ECEFF2;
padding: .5em;
`

export const ErrorNotification = styled.p`
color: red;
font-size: .8em;
padding: .5em;
`

export const SuccessNotification = styled(ErrorNotification)`
color: green;
`

export const Mastercard = styled(FaCcMastercard)`
font-size: 1.7em;
`

export const Visa = styled(FaCcVisa)`
font-size: 1.7em;
`

export const Empty = styled(FiCreditCard)`
font-size: 1.7em;
`

export const CardInput = styled.input`
border: none;
outline: none;
`

export const CardNumber = styled(CardInput)`
width: 170px;
margin-left: 1em;
`

export const CardDate = styled(CardInput)`
width: 70px;
`

export const CardCvc = styled(CardInput)`
margin-left: 1em;
width: 70px;
`