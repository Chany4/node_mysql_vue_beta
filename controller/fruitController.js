import {getfruitsDb, getfruitDb, addfruitDb, deletfruitDb, updatefruitDb, addToCartDb}from '../model/fruitsModel.js'
import { getUserDb } from '../model/userModel.js';

const getfruits = async (req, res) => {
    res.json(await getfruitsDb());
}

const getfruit = async(req,res) => {
    console.log(req.params.id);
    res.json(await getfruitDb(req.params.id))
}

const addfruit = async(req, res) => {
    let [fruit_name, weight, amount] = req.body;
    await addfruitDb();
    res.send('New fruit was inserted successfully')
}

const deletfruit = async(req,res) => {
    let [id] = req.body
    await deletfruitDb(req.params.id)
    res.send('fruit was deleted successfully')
}

const updatefruit = async (req,res) => {
    let {fruit_name, weight, amount} = req.body
    let fruit = await updatefruitDb(req.params.id)
    fruit_name? fruit_name=fruit_name : fruit_name = fruit.fruit_name
    weight? weight=weight : weight = fruit.weight
    amount? amount=amount : amount = fruit.amount
   
    await updatefruitDb(req.params.id,)
    res.send('Update was successful');
}

const addToCart = async (req,res) => {
    console.log(req.body);
    let user_ID = await getUserDb()
    // await addToCartDb(req.body.id,)
    res.json({message:"You've added an item to cart"})
    console.log('you have added to your cart');
    
}

export {getfruits,getfruit, addfruit, deletfruit,updatefruit, addToCart}