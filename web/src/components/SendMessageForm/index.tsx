import styles from './styles.module.scss';
import { Container, SignOutButton, UserInfo, SendMessageFormContainer } from './styles.ts';
import { FormEvent, useContext, useState, useEffect } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';
import { api } from '../../services/api';
import { motion, useAnimation } from 'framer-motion';


export function SendMessageForm() {
   const { user, signOut } = useContext(AuthContext);
   const [message, setMessage] = useState('');

   const handleSendMessage = async (event: FormEvent) => {
      event.preventDefault();
      if (!message.trim()) {
         return;
      }

      await api.post('messages', { message });

      setMessage('');
   }

   const controls = useAnimation();

   useEffect(() => {
      controls.start({ scale: 1, opacity: 1 });
   }, []);

   const tapAnimation = async () => {
      await controls.start({
         scale: 0.9,
         opacity: 0,
         transition: {
            duration: 0.3
         }
      });
      signOut()
   }
   return (

         <Container
            as={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            transition={{ delay: 0, duration: 0.3 }}
            
         >
            <SignOutButton onClick={tapAnimation}>
               <VscSignOut size="32" />
            </ SignOutButton>
            <UserInfo>
               <div className="userImage">
                  <img src={user?.avatar_url} alt={user?.name} />
               </div>
               <strong className="userName">{user?.name}</strong>
               <span className="userGithub">
                  <VscGithubInverted />
                  {user?.login}
               </span>
            </UserInfo>
            <SendMessageFormContainer onClick={handleSendMessage}>
               <label htmlFor="message">Mensagem</label>
               <textarea 
                  name="message" 
                  id="message" 
                  placeholder="Qual sua expectativa para o evento?"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
               />
               <button type="submit">Enviar Mensagem</button>
            </SendMessageFormContainer>
         </Container>

   )
}