import styles from './styles.module.scss';
import logoImg from '../../assets/logo.svg';

export function MessageList() {
   return (
      <div className={styles.messageListWrapper}>
         <img src={logoImg} alt="DoWhile 2021" />

         <ul className={styles.messageList}>
            <li className={styles.message}>
               <p className={styles.messageContent}>Não vejo a hora de começar esse evento maravilhoso que agrega tanto na vida de qualquer progamador brasileiro</p>
               <div className={styles.messageUser}>
                  <div className={styles.userImage}>
                     <img src="https://github.com/bryanmaraujo544.png" alt="Bryan" />
                  </div>
                  <span>Bryan Martins</span>
               </div>
            
            </li>
            <li className={styles.message}>
               <p className={styles.messageContent}>Não vejo a hora de começar esse evento maravilhoso que agrega tanto na vida de qualquer progamador brasileiro</p>
               <div className={styles.messageUser}>
                  <div className={styles.userImage}>
                     <img src="https://github.com/bryanmaraujo544.png" alt="Bryan" />
                  </div>
                  <span>Bryan Martins</span>
               </div>
            
            </li>
            <li className={styles.message}>
               <p className={styles.messageContent}>Não vejo a hora de começar esse evento maravilhoso que agrega tanto na vida de qualquer progamador brasileiro</p>
               <div className={styles.messageUser}>
                  <div className={styles.userImage}>
                     <img src="https://github.com/bryanmaraujo544.png" alt="Bryan" />
                  </div>
                  <span>Bryan Martins</span>
               </div>
            
            </li>
         </ul>
      </div>
   )
}