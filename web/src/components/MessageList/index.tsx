
import { Container, MessageListContainer } from './styles.ts';
import { api } from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { useEffect, useState } from 'react';
import io from 'socket.io-client'

type Message = {
   id: string;
   text: string;
   user: {
      name: string;
      avatar_url: string;
   }
}
const socket = io('http://localhost:4000');

const messagesQueue: Message[] = [];

socket.on('new_message', newMessage => {
   messagesQueue.push(newMessage);
})

export function MessageList() {
   const [messages, setMessages] = useState<Message[]>([]);

   useEffect(() => {
      const timer = setInterval(() => {
         if (messagesQueue.length > 0) {
            setMessages(prevState => [
               messagesQueue[0],
               prevState[0],
               prevState[1],
            ].filter(Boolean));

            messagesQueue.shift();
         }
      }, 3000)
   }, [])

   useEffect(() => {
      (async () => {
         const res = await api.get<Message[]>('messages/last3');
         setMessages(res.data);
      })();
   }, [])

   return (
      <Container>
         <img src={logoImg} alt="DoWhile 2021" />
         <MessageListContainer>
            {messages.map((msg) => (
               <li className="message" key={msg.id}>
                  <p className="messageContent">{msg.text}</p>
                  <div className="messageUser">
                     <div className="userImage">
                        <img src={msg.user.avatar_url} alt={msg.user.name} />
                     </div>
                     <span>{msg.user.name}</span>
                  </div>
               </li>
            ))}

         </MessageListContainer>
      </Container>
    
   )
}