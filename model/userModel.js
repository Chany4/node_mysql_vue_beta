import { createPool } from "mysql2/promise";
import { config } from "dotenv";
import { pool } from "../config/config.js";
config()

const getUsersDb = async () => {
    let [data] = await pool.query('SELECT * FROM users')
    return data
}

const getUserDb = async (username) => {
    let [[data]] =  await pool.query('SELECT * FROM users WHERE user_name = ?' ,[username])
    return data
}

const addUserDb = async (name, surname, age, fav_coding_lang, fav_car, eye_color,password,user_name) => {
    let [data] = await pool.query(`INSERT INTO users (name, surname, age, fav_coding_lang, fav_car, eye_color,password,user_name) VALUES(?,?,?,?,?,?,?,?) `,
    [name, surname, age, fav_coding_lang, fav_car, eye_color,password,user_name]  
    )
    
}

const deletUserDb = async(id) => {
    let [data] = await pool.query(
        `DELETE FROM users WHERE id = ?`, [id] 
    )
};

const updateUserDb = async(name, surname, age, fav_coding_lang, fav_car, eye_color) => {
    await pool.query(
        `UPDATE users SET name = ?, surname = ?, age = ?, fav_coding_lang = ?, fav_car = ?, eye_color = ?`, [name, surname, age, fav_coding_lang, fav_car, eye_color] 
    )
};

export {getUsersDb, getUserDb, addUserDb, deletUserDb, updateUserDb}