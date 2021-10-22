import styled from 'styled-components';
import bgImage from '../../assets/banner-girl.png'

export const Container = styled.div`
   width: 100%;
   background: #17171a url(${bgImage}) no-repeat center top;
   padding: 440px 80px 0;
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;


   @media (max-width: 968px) {
      padding: 172px 32px 0px;
      background: #17171a url(${bgImage}) no-repeat center bottom;
      box-shadow: inset 0px 32px 300px rgba(0,0,0,0.7);
   }

   strong {
      font-size: 3.2rem;
      line-height: 36px;
   }

   .signInWithGithub {
      background: #ffcd1e;
      margin-top: 3.2rem;
      padding: 0 40px;
      height: 5.6rem;
      color: #09090a;
      font-size: 1.4rem;
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
         margin-right: 16px;
      }

      &:hover {
         filter: brightness(0.9);
      }

      @media (max-width: 968px) {
         height: 48px;
         padding: 0 32px;
      }

   }

`