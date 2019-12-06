import { Router } from 'express'
import { CreateToken } from '../../utils/security/tokens';
import * as passport from 'passport'

const router = Router();


router.post('/', passport.authenticate('local'), async (req:any, res)=>{
    try{
    let token= await CreateToken({userid: req.user.id})
    res.json({
        token,
        role: req.user.role,
        userid: req.user.id
    })
    }catch(e){
        console.log(e);
        res.status(500)
    }
})

export default router