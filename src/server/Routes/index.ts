import * as express from 'express';
import apiRouter from './api/index'
import authRouter from './auth/index'


const router = express.Router();

router.use('/auth', authRouter)

router.use('/api', apiRouter)



export default router;