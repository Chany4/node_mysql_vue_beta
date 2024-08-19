import express from 'express';
import {userRouter} from './routes/userRoutes.js'
import { fruitRouter } from './routes/fruitRoutes.js';
import cors from 'cors';

let port = process.env.PORT ||7000
const app = express()

app.use(cors({
    origin: 'http://localhost:8081',
    credentials:true
}))
app.use(express.json())

app.use('/users', userRouter)

app.use('/fruits', fruitRouter)


app.listen(port,()=>{
    console.log('http://localhost:'+ port);
})
