import { compare } from "bcrypt";
// import { error } from "console";
import { getUserDb } from "../model/userModel.js";
import joke from "jsonwebtoken"
import { config } from "dotenv";
{config}

const   checkUser = async (req, res,next) => {
    const {user_name, password} = req.body;
    console.log(user_name);
    let hashedPassword = (await getUserDb(user_name)).password
    console.log(hashedPassword);
    let result = await compare(password, hashedPassword)
    console.log(result);
        if(result == true){
            let token = joke.sign({username: user_name}, process.env.SECRET_KEY, {expiresIn: '1h'})
            console.log(token);
            req.body.token = token
            next();
            return
        }
        else {
            res.send('Password incorrect')
            console.log('password incorrect')
        }
}

const verifyAToken = (req,res,next) => {
    let{cookie} = req.headers
    // check if the token exists first
    let token = cookie && cookie.split('=')[1]
    // console.log(token);
    console.log('hehe');
    
    joke.verify(token,process.env.SECRET_KEY, (err,decoded) =>{
        if(err){
            console.log(err);
            
            res.json({message:'Token is invalid'});
            return;

    }
    console.log('hehe2');
    
    req.body.user_name = decoded
    console.log(decoded);
    
})
    // console.log(req.headers);
    console.log(token);
    next();
}

export {checkUser, verifyAToken}

