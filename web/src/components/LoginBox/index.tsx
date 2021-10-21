import { useContext, useEffect } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';
import { Container } from './styles.ts';

export function LoginBox() {
   const { signInUrl } = useContext(AuthContext);

   return (
      <Container>
         <strong>Entre e compartilhe sua mensagem</strong>
         <a href={signInUrl} className="signInWithGithub">
            <VscGithubInverted size="24px" />
            Entrar com Github
         </a>
      </Container>

   )
}