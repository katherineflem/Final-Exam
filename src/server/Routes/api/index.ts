import * as Router from 'express'
import booksRouter from './books'
import { tokenCheckpoint } from '../../middleware/authCheckpoints'
import categoryRouter from './categories'

const router= Router()

router.use(tokenCheckpoint)

router.use('/books', booksRouter)

router.use('/categories', categoryRouter)


export default router