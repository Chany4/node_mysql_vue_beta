import express from 'express'
import {getUsers,getUser, addUser, deletUser,updateUser, loginUser} from '../controller/userController.js'
import { checkUser } from '../middleware/authenticate.js';

const userRouter = express.Router();

// userRouter.post('/login', checkUser, (req,res) => {
//     // res.send('You have signed in')
//     res.json({
//         message: "You have signed in !!", 
//         token:req.body.token

//     })
// })

userRouter.post('/login', checkUser, loginUser)

userRouter.get('/getAllUsers', getUsers)

userRouter.get('/getUser/:id', getUser)

userRouter.post('/addUser', addUser)

userRouter.delete('/deleteUser/:id', deletUser)

userRouter.patch('/editUser/:id', updateUser)

export {userRouter}