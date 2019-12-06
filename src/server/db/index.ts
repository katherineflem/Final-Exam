import * as mysql from 'mysql'
import config from '../config'
import Books from './queries/books'
import Users from './queries/users'
import Tokens from './queries/tokens'


export const pool = mysql.createPool(config.mysql)

export const Query = (query: string, values?: any) => {
    return new Promise((resolve, reject) => {
        pool.query(query, [values], (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}

export default{
    Books,
    Users,
    Tokens
}