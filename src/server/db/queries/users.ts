import {Query} from '../index'


const findbyEmail=(email:string)=>Query('SELECT * from users WHERE email=? LIMIT 1', [email])

const getOneUser= (id:number)=>Query("SELECT * from users WHERE id=? LIMIT 1", [id])

const insertUser= (email:string, password:string, name:string)=>Query('INSERT INTO users (email, password, name) VALUES(?)', [email, password, name])

export default{
    findbyEmail,
    getOneUser,
    insertUser
}