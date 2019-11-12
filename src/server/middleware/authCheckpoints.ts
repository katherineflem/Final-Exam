import * as passport from 'passport'
import { RequestHandler } from 'express';
//any api requests will validate the token and user with this function
//import in our index.ts in api routes folder and use there as a function 
//recreate on blogs to test first 
export const tokenCheckpoint = (req, res, next) => {
    return passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if (user) req.user = user;
        return next()
    })(req, res, next)
};

//import into allblogs file to use as middleware function
export const isAdmin: RequestHandler = (req:any, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.sendStatus(401);
    } else {
        return next()
    }
};