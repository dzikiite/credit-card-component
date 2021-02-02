import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './components/Header/Header';
import CreditCardForm from './components/CreditCardForm/CreditCardForm';

const GlobalStyle = createGlobalStyle`
*, ::before, ::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #132844;
  font-family: 'Montserrat', serif;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <CreditCardForm />
    </>
  );
};

export default App;
