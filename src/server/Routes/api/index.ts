import * as Router from 'express'
import booksRouter from './books'
import { tokenCheckpoint } from '../../middleware/authCheckpoints'

const router= Router()

router.use(tokenCheckpoint)

router.use('/books', booksRouter)


export default router