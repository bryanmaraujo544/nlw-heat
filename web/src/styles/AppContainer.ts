import styled, { css } from 'styled-components';
import bg from '../assets/background.svg';

interface ContainerProps {
   isSigned: boolean;
}

export const AppContainer = styled.main<ContainerProps>`
   max-width: 1200px;
   height: 100vh;
   margin: 0 auto;
   display: grid;
   grid-template-columns: 1fr 453px;
   column-gap: 120px;
   padding: 16px 32px;

   @media(max-width: 968px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      height: 100%;
      padding-bottom: 32px;
   }
`

export const BgRight = styled.div`
   position: absolute;
   right: 0;
   top: 0;
   height: 100vh;
   width: 400px;
   background: url(${bg}) no-repeat;
   background-size: cover;
   z-index: -1;

   @media (max-width: 968px) {
      display: none;
   }
`




