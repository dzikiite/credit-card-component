import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  HeaderContainer,
  Container,
  Title,
  LanguageContainer,
  LanguageItem,
} from './Header.elements';

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = lang => i18n.changeLanguage(lang);

  return (
    <>
      <HeaderContainer>
        <Container>
          <Title>{t('title')}</Title>
          <LanguageContainer>
            <LanguageItem onClick={() => handleChangeLanguage('pl')}>
              PL
            </LanguageItem>
            |
            <LanguageItem onClick={() => handleChangeLanguage('en')}>
              EN
            </LanguageItem>
          </LanguageContainer>
        </Container>
      </HeaderContainer>
    </>
  );
};

export default Header;
