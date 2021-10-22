import styled, { css } from 'styled-components';
import bg from '../assets/background.svg';

export const AppContainer = styled.main`
   max-width: 1200px;
   height: 100vh;
   margin: 0 auto;
   display: grid;
   grid-template-columns: 1fr 453px;
   column-gap: 120px;
   position: relative;
   padding: 0 64px;

   @media(max-width: 968px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
   }
/* 
   &::before {
      @media(min-width: 968px){
         ${props => props.isSigned && css`
            content: '';
            height: 100vh;
            width: 420px;
            background: url(${bg}) no-repeat;
            background-size: cover;
            position: absolute;
            right: -200px;
            top: 0;
         `} 
      }
   } */


`




