import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;

   @media (max-width: 968px) {
      align-items: center;
      margin-bottom: 64px;
   }

   > img {
     height: 2.8rem;
     margin-top: 3.2rem;
     align-self: flex-start;

     @media (max-width: 968px) {
        margin-top: 2.4rem;
        margin-bottom: 48px;
        height: 2.4rem;
     }
   
   }
`

export const MessageListContainer = styled.ul`
   list-style: none;
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 4.2rem;
   flex: 1;

   .message {
      max-width: 440px;

      &:nth-child(2) {
         margin-left: 8.0rem;
      }

      .messageContent {
         font-size: 1.8rem;
         line-height: 1.5;
      }

      .messageUser {
         margin-top: 1.6rem;
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
               width: 3rem;
               height: 3rem;
               border-radius: 50%;
               border: 4px solid #121214;
            }
         }

         span {
            font-size: 1.6rem;
            margin-left: 1.2rem;
         }
      }
   }
`