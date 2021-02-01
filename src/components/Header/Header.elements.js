import styled from 'styled-components';

export const HeaderContainer = styled.header`
display: flex;
justify-content: center;
position: fixed;
top: 0;
right: 0;
left: 0;
height: 100px;
background-color: #181f2b;
`
export const Container = styled.div`
width: 100%;
max-width: 1300px;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

export const Title = styled.h1`
font-size: 2rem;
font-weight: 700;
padding: 0 1em;
`

export const LanguageContainer = styled.div`
display: flex;
padding: 0 1em;
`
export const LanguageItem = styled.p`
font-weight: 500;
cursor: pointer;
padding: 0 5px;
`
