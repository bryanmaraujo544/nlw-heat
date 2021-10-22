import { useContext } from 'react';
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from './contexts/auth';
import styles from './styles/App.module.scss';
import { AppContainer, BgRight} from './styles/AppContainer';
import { motion } from 'framer-motion';

export function App() {
  const { user } = useContext(AuthContext);

  return (
    <AppContainer isSigned={!!user ? true : false}>
      <MessageList />
      { !!user ? <SendMessageForm /> : <LoginBox /> }
      { !!user && 
        <BgRight 
          as={motion.div}
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0, duration: .3 }}
        /> 
      }
      
    </AppContainer>
  )
}

