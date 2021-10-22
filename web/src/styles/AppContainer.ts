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
   padding: 16px 32px;

   @media(max-width: 968px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      height: 100%;
      padding-bottom: 64px;
   }



`




