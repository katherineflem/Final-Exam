import { Router } from 'express'

const router = Router();

//USE FOR INDEX FILE 
router.use();

//USE FOR API ENDPOINTS
router.get('/test', async (req, res)=>{
    try{

    }catch(e){
        console.log(e);
        res.status(500).json("NOPE")
    }
})

export default router