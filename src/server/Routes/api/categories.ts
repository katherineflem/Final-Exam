import { Router } from 'express'
import db from '../../db';

const router = Router();



router.get('/', async (req:any, res)=>{
    try{
    let categories = await db.Categories.getallcategories()
    res.json(categories)
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
})


router.get('/:id', async (req:any, res)=>{
    try{
    let id= req.params.id
    let [category] :any= await db.Categories.getonecategory(id)
    res.json(category)
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
})

export default router