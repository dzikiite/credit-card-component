import { useState, useEffect } from 'react';
import { NUMBER_REGEX, 
         FOUR_DIGITS,
         NUMBER_LENGTH, 
         NUMBER,
         DATE,
         CVC } from '../utils/constants';

export const useCreditCard = () => {
    const [ number, setNumber ] = useState('');
    const [ date, setDate ] = useState('');
    const [ cvc, setCvc ] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;

        if (name === NUMBER && NUMBER_REGEX.test(value) && value.length <= NUMBER_LENGTH) {
            if (value.length > 1) setNumber(value.match(FOUR_DIGITS).join(' '));
            else setNumber(value);
        }
        else if (name === DATE) setDate(value);
        else if (name === CVC) setCvc(value);
    }

    useEffect(() => {
        
    }, [number, date, cvc])

    return { handleChange, number, date, cvc }
}