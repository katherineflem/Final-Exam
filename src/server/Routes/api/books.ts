import { Router } from 'express'

const router = Router();


router.get('/', async (req, res)=>{
    try{

    }catch(e){
        console.log(e);
        res.sendStatus(500).json("NOPE")
    }
})

export default router