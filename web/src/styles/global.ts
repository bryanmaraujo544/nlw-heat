import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      background: none;
      border: 0;
      box-sizing: border-box;
      text-decoration: none;
      list-style: none;
      font-family: Roboto, sans-serif;
   }

   html {
      font-size: 62.5%;

      @media (max-width: 968px) {
         font-size: 9px;
      }
   }

   body {
      color: #e1e1e6;
      background: #121214;
      max-width: 100vw;
 
   }

`