# nlw-heat

## 💻 How it works
Basically the application able the user to send any comments about the nlw-heat event. But for that he needs to sign in usign github account.
All the comments the users is sending is showed in real-time on the screen.

## :hammer: How It was made
The Node.js was responsible to authenticate the user based on the code that is sended by the github sign in process, once the code is got
the backend can get an access_token and make a jwt_token and send to frontend.
All the messages is been listened for socket.io server, making possible all the users see in realtime the messages is been sended
Node.js also was responsible to make the database's processes joinned with Prisma, wich makes easier all of theses database process.  
The interface of the application was made using React.

## :mag_right: Technologies used

- Node.js
- Express
- Typescript (for backend and frontend
- Prisma
- SqLite
- Socket.io
- React
- Styled-Components
- Framer-motion
- Axios 


