import  express from 'express';
import 'dotenv/config';
require('express-async-errors');
import routes from './routes';
import http from 'http';
import cors from 'cors';

import { Server } from 'socket.io';

const app = express();

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
    cors: {
        origin: '*'
    }
});

io.on('connection', (socket) => {
    console.log(`User connected in socket ${socket.id}`);
});


app.use(cors());
app.use(express.json());
app.use(routes);
app.use((error, req, res, next) => {
    console.log(error);
    res.sendStatus(500);
});

app.get('/github', (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

app.get('/signin/callback', (req, res) => {
    const { code } = req.query;
    return res.json(code);
})

export { serverHttp, io };

