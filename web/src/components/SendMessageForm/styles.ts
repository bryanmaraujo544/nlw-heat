import styled from 'styled-components';

export const Container = styled.div`
   background: #1b1b1f;
   padding: 24px;
   align-self: center;

   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   position: relative;
`

export const SignOutButton = styled.button`
   background: transparent;
   border: 0;
   color: #c4c4cc;
   position: absolute;
   left: 24px;
   top: 24px;
   cursor: pointer;

   &:hover {
      filter: brightness(0.9);
   }
`

export const UserInfo = styled.header`
   display: flex;
   flex-direction: column;
   align-items: center;

   .userImage {
      padding: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(100deg, #ff008e, #ffcd1e);
      border-radius: 50%;
      line-height: 0;
      img {
         width: 94px;
         height: 94px;
         border-radius: 50%;
         border: 3px solid #121214;
      }
      
   }

   .userName {
      font-size: 24px;
      line-height: 30px;
      margin-top: 16px;
   }

   .userGithub {
      display: flex;
      align-items: center;
      margin-top: 8px;
      color: #cdcdcc;

      svg {
         margin-right: 8px;
      }
   }

`

export const SendMessageFormContainer = styled.form`
   display: flex;
   flex-direction: column;
   align-self: stretch;
   margin-top: 48px;
   background: #202024;

   label {
      padding: 18px 24px;
      font-size: 20px;
      background: #29292e;
      font-weight: 700;
      text-align: center;

      @media(max-width: 768px) {
         padding: 12px 20px;
         font-size: 16px;
      }
   }

   textarea {
      background: transparent;
      border: 0;
      padding: 24px;
      resize: none;
      height: 160px;
      color: #e1e1e6;
      font-size: 16px;
      line-height: 24px;

      @media(max-width: 768px) {
         height: 100px;
         padding: 20px;
      }

      &:focus {
         outline: 0;
      }

      &::placeholder {
         color: #8d8d99;
      }
   }

   button {
      align-self: flex-end;
      background: #ff008e;
      margin: 24px;
      cursor: pointer;
      padding: 0 32px;
      height: 40px;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;

      @media(max-width: 768px) {
         padding: 0 24px;
         font-size: 12px;
      }

      &:hover {
         filter: brightness(0.9);
      }
   }
`