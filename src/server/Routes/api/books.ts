import { Router } from 'express'
import db from '../../db'
import {isAdmin} from '../../middleware/authCheckpoints'

const router = Router();


router.get('/', async (req, res) => {
    try {
        let books = await db.Books.allBooks()
        res.json(books)
    } catch (e) {
        console.log(e);
        res.sendStatus(500).json("NOPE")
    }
})

router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id
        let [book]: any = await db.Books.oneBook(id)
        res.json(book)
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

router.post('/', isAdmin, async (req, res) => {
    try {
        let title = req.body.title
        let author = req.body.author
        let categoryid = req.body.categoryid
        let price = req.body.price
        let newBook = await db.Books.addNew(title, author, categoryid, price)
        res.json(newBook)
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

router.put('/:id', isAdmin, async (req, res) => {
    try {
        let title = req.body.title
        let id = req.params.id
        let author = req.body.author
        let categoryid = req.body.categoryid
        let price = req.body.price
        let editedBook = await db.Books.editBook(title, author, categoryid, price, id)
        res.json(editedBook)
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

router.delete('/:id', isAdmin, async (req, res) => {
    try {
        let id = req.params.id
        let book = await db.Books.deleteBook(id)
        res.json(book)
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

export default router