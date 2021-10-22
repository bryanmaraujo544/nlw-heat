
import { Container, MessageListContainer } from './styles.ts';
import { api } from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { motion, useAnimation, AnimateSharedLayout } from 'framer-motion'
import { slowContainer, childVariants } from '../../animations';

type Message = {
   id: string;
   text: string;
   user: {
      name: string;
      avatar_url: string;
   }
}

const messagesQueue: Message[] = [];

const socket = io('http://localhost:4000');

// Every time a new message is sended, we grab the informations of it and put in the end of our messagesQueue array
// Theses information about message is been sended by backend for sockec.io server
socket.on('new_message', newMessage => {
   messagesQueue.push(newMessage);
})

export function MessageList() {
   const controls = useAnimation();
   const [messages, setMessages] = useState<Message[]>([]);

   /* in every 3 second we are updating our messages states with the oldest message of messageQueue ->
      who is been updated by socket.io */
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
      }, 3000);
   }, []);

   // Here we are getting the last 3 messages from our backend
   useEffect(() => {
      (async () => {
         const res = await api.get<Message[]>('messages/last3');
         setMessages(res.data);
      })();
   }, []);

   // This useEffect is responsible to animate each message every time the messages state suffer some alteration
   // In other words, all the time a new messages is sended to the state, the messages are animated
   useEffect(() => {
      controls.start(i => ({
         opacity: 1,
         y: 0,
         transition: { delay: i * 0.3 }
      }));
   }, [messages]);

   return (
      <Container>
         <motion.img 
            src={logoImg} 
            alt="DoWhile 2021" 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
         />
         <AnimateSharedLayout>
            <MessageListContainer 
               as={motion.ul}
               layout
            >
               {messages.map((msg, i) => (
                  <motion.li 
                     key={msg.id}
                     className="message"
                     initial={{ opacity: 0, y: -100 }}
                     animate={controls}
                     custom={i + 1}
                     layout
                  >
                     <p className="messageContent">{msg.text}</p>
                     <div className="messageUser">
                        <div className="userImage">
                           <img src={msg.user.avatar_url} alt={msg.user.name} />
                        </div>
                        <span>{msg.user.name}</span>
                     </div>
                  </motion.li>
               ))}
            </MessageListContainer>
         </AnimateSharedLayout>
      </Container>
    
   )
}