import { useContext } from 'react';
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from './contexts/auth';
import styles from './styles/App.module.scss';
import { AppContainer, Square } from './styles/AppContainer.ts';

export function App() {
  const { user } = useContext(AuthContext);


  return (
    

    <AppContainer isSigned={true}>
      <MessageList />
      { !!user ? <SendMessageForm /> : <LoginBox /> }
    </AppContainer>
    // <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
    // </main>
  )
}

