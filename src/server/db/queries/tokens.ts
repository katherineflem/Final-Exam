import {Query} from '../index'

const findOneToken = async(id:number, token:string)=>Query(`SELECT * from tokens WHERE id='${id}' AND token='${token}'`)

const insert= async(userid:number)=>Query('INSERT INTO tokens (userid) VALUES(?)', [userid])

const update = async(id:number, token:string)=>Query(`UPDATE tokens SET token='${token}' WHERE id='${id}'`)


export default{
    findOneToken,
    insert,
    update
}