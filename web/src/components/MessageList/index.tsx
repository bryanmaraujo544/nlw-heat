
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
const socket = io('http://localhost:4000');

const messagesQueue: Message[] = [];


socket.on('new_message', newMessage => {
   messagesQueue.push(newMessage);
})

export function MessageList() {
   const controls = useAnimation();
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

   useEffect(() => {
      console.log('rodu')
      controls.start(i => ({
         opacity: 1,
         y: 0,
         transition: { delay: i * 0.3 }
      }))
   }, [messages])

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