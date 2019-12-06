import {Query} from '../index'

const getallcategories = ()=>Query('SELECT * from categories')

const getonecategory = (id:number)=>Query('SELECT * from categories WHERE id=?', [id])

export default{
    getallcategories,
    getonecategory
}