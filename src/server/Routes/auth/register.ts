import { Router } from 'express'
import { CreateToken } from '../../utils/security/tokens';
import {HashPassword} from '../../utils/security/password'
import db from '../../db';

const router = Router();


router.post('/',  async (req:any, res:any)=>{
    try{
        let email= req.body.email
        let password= req.body.password
        let name= req.body.name
        password= HashPassword(req.body.password)
        let user: any= await db.Users.insertUser(email, password, name)
    let token= await CreateToken({userid: user.insertId})
    res.json({
        token,
        role: 'guest',
        userid: user.insertId
    })
    }catch(e){
        console.log(e);
        res.status(500)
    }
})

export default router