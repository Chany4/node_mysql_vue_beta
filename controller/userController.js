import {hash} from 'bcrypt'
import {getUsersDb, getUserDb, addUserDb, deletUserDb, updateUserDb,} from '../model/userModel.js'

const getUsers = async (req, res) => {
    res.json(await getUsersDb());
}

const getUser = async(req,res) => {
    console.log(req.params.id);
    res.json(await getUserDb(req.params.id))
}

const addUser = async(req, res) => {
    let {name, surname, age, fav_coding_lang, fav_car, eye_color,password,user_name} = req.body
    let hashedP = await hash(password, 10) 
    console.log(hashedP);
    
    if (hashedP.stack) throw (hashedP)
    await addUserDb(name, surname, age, fav_coding_lang, fav_car, eye_color,hashedP,user_name);
    res.send(await getUsersDb())
    console.log('Data was inserted successfully');
    
};

const deletUser = async(req,res) => {
    let {id} = req.body
    await deletUserDb(req.params.id)
    res.send('User was deleted successfully')
}

const updateUser = async (req,res) => {
    let {name, surname, age, fav_coding_lang, fav_car, eye_color} = req.body
    let user = await updateUserDb(req.params.id)
    name? name=name : name = user.name
    surname? surname=surname : surname = user.surname
    age? age=age : age = user.age
    fav_coding_lang? fav_coding_lang=fav_coding_lang : fav_coding_lang = user.fav_coding_lang
    fav_car? fav_car=fav_car : fav_car = user.fav_car
    eye_color? eye_color=eye_color : eye_color = user.eye_color
    
    await updateUserDb(req.params.id,)
    res.send('Update was successful');
}

const loginUser = (req,res) => {
    // res.send('You have signed in')
    res.json({
        message: "You have signed in successfully!!", 
        token:req.body.token

    })
}

export {getUsers,getUser, addUser, deletUser,updateUser, loginUser}