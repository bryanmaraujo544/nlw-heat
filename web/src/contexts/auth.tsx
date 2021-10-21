import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from '../services/api';


type AuthProvider = {
   children: ReactNode;
}

type User = {
   id: string;
   name: string;
   login: string;
   avatar_url: string;
}

type AuthContextData = {
   user: User | null;
   signInUrl: string;
   signOut: () => void;
}

type AuthResponse = {
   token: string;
   user: {
      id: string;
      avatar_url: string;
      name: string;
      login: string;
   }
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children } : AuthProvider) => {
   const [user, setUser] = useState<User | null>(null);

   const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=0497cd3ae0328aa10b5e`; 
   
   // This function will be runned when the github button is clicked
   const signIn = async (githubCode: string) => {
      // This route on backend will return one jwt token and user's information
      const response = await api.post<AuthResponse>('authenticate', {
         code: githubCode,
      });

      const { token, user } = response.data;
      localStorage.setItem('@dowhile:token', token);

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      setUser(user);
   }

   const signOut = () => {
      setUser(null);
      localStorage.removeItem('@dowhile:token');
   }

   // Here we are getting the token and if there's one, we are getting the user's information from backend;
   useEffect(() => {
      (async () => {
         const token = localStorage.getItem('@dowhile:token');

         if (token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`
            const response = await api.get<User>('profile');
            setUser(response.data);
         } 
      })()
   }, []);

   // This useEffect will run one time after the github button is clicked. We are grabbing the code sended by Github;
   useEffect(() => {
         const url = window.location.href;
         const hasGithubCode = url.includes('?code=');
         if (hasGithubCode) {
            const [urlWithoutCode, githubCode] = url.split('?code=');
            window.history.pushState({}, '', urlWithoutCode);
            signIn(githubCode);
         }
   }, []);
   return (
      <AuthContext.Provider value={{ signInUrl, user, signOut }}>
         {children}
      </AuthContext.Provider>
   )
}