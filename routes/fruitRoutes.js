import express from 'express'
import {getfruits,getfruit, addfruit, deletfruit,updatefruit, addToCart} from '../controller/fruitController.js'
// import { verify } from 'jsonwebtoken';
import {verifyAToken} from '../middleware/authenticate.js'

const fruitRouter = express.Router();

fruitRouter.post('/cart',verifyAToken, addToCart)

fruitRouter.get('/getAllFruit', getfruits)

fruitRouter.get('/singleFruit', getfruit)

fruitRouter.post('/addFruit', addfruit)

fruitRouter.patch('/editFruit/:id', updatefruit)

fruitRouter.delete('/deleteFruit/:id', deletfruit)


export {fruitRouter}