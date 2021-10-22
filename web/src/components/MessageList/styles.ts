import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;

   @media (max-width: 968px) {
      align-items: center;
      margin-top: 32px;
      grid-row: 2 / 3;
   }

   > img {
      height: 28px;
      margin: 32px 0;
   }
`

export const MessageListContainer = styled.ul`
   list-style: none;
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 42px;
   flex: 1;

   .message {
      max-width: 440px;

      &:nth-child(2) {
         margin-left: 80px;
      }

      .messageContent {
         font-size: 18px;
         line-height: 28px;
      }

      .messageUser {
         margin-top: 16px;
         display: flex;
         align-items: center;
         .userImage{
            padding: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(100deg, #ff008e, #ffcd1e);
            border-radius: 50%;
            line-height: 0;
            img {
               width: 30px;
               height: 30px;
               border-radius: 50%;
               border: 4px solid #121214;
            }
         }

         span {
            font-size: 16px;
            margin-left: 12px;
         }
      }
   }
`