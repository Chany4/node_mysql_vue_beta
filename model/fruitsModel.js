import { createPool } from "mysql2/promise";
import { config } from "dotenv";
import { pool } from "../config/config.js";
config()

const getfruitsDb = async () => {
    let [data] = await pool.query('SELECT * FROM fruits')
    return data
}

const getfruitDb = async () => {
    let [[data]] =  await pool.query('SELECT * FROM fruits WHERE id = ?' [id])
    return data
}

const addfruitDb = async (fruit_name, weight, amount) => {
    let [data] = await pool.query(`INSERT INTO fruits (fruit_name, weight, amount) VALUES(?,?,?,?,?,?,?) `,
    [fruit_name, weight, amount]  
    )
    
}

const deletfruitDb = async(id) => {
    let [data] = await pool.query(
        `DELETE FROM fruits WHERE id = ?`, [id] 
    )
};

const updatefruitDb = async(id, fruit_name, weight, amount) => {
    await pool.query(
        `UPDATE fruits SET fruit_name = ?, weight = ?, amount = ?`, [id, fruit_name, weight, amount] 
    )
};

const addToCartDb = async (fruit_ID, user_ID) => {
    await pool.query (`INSERT INTO cart (fruit_ID, user_ID) VALUES(?,?) `,
    [fruit_ID, user_ID] )
}

export {getfruitsDb, getfruitDb, addfruitDb, deletfruitDb, updatefruitDb, addToCartDb}