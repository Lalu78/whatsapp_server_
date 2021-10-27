import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import route from './routes/Route.js'

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({extended:true}))


app.use('/', route);
app.listen(PORT, () => {
    console.log(`server is started on Port number ${PORT}`)
})

Connection();