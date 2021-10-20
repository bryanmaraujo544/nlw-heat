import { api } from '../../services/api';
import styles from './styles.module.scss';
import logoImg from '../../assets/logo.svg';
import { useEffect, useState } from 'react';

type Message = {
   id: string;
   text: string;
   user: {
      name: string;
      avatar_url: string;
   }
}

export function MessageList() {
   const [messages, setMessages] = useState<Message[]>([]);
   useEffect(() => {
      (async () => {
         const res = await api.get<Message[]>('messages/last3');
         setMessages(res.data);
      })();
   }, [])
   return (
      <div className={styles.messageListWrapper}>
         <img src={logoImg} alt="DoWhile 2021" />

         <ul className={styles.messageList}>
            {messages.map((msg) => (
               <li className={styles.message} key={msg.id}>
                  <p className={styles.messageContent}>{msg.text}</p>
                  <div className={styles.messageUser}>
                     <div className={styles.userImage}>
                        <img src={msg.user.avatar_url} alt={msg.user.name} />
                     </div>
                     <span>{msg.user.name}</span>
                  </div>
               
               </li>
            ))}
         </ul>
      </div>
   )
}