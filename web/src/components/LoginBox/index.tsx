import { useContext, useEffect } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';
import { Container } from './styles';
import { motion, AnimatePresence } from 'framer-motion';

export function LoginBox() {
   const { signInUrl } = useContext(AuthContext);



   return (
         <Container
            as={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0, duration: 0.3 }}
         >
            <strong>Entre e compartilhe sua mensagem</strong>
            <motion.a 
               href={signInUrl} 
               className="signInWithGithub"
               whileHover={{ 
                  scale: [1, 1.03],
                  transition: {
                     duration: .5,
                     yoyo: Infinity,
                  }
               }}
            >
               <VscGithubInverted size="24px" />
               Entrar com Github
            </motion.a>
         </Container>


   )
}