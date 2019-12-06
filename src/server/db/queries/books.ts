import {Query} from '../index'


const allBooks = async ()=>Query('SELECT books.*, Categories.name FROM books JOIN categories on Books.categoryid = categories.id')

const oneBook = async (id:number) =>Query('SELECT books.*, Categories.name FROM books JOIN categories on Books.categoryid = categories.id WHERE books.id=?', [id])

const addNew = async(title: string, author:string, categoryid:string, price:number)=>Query('INSERT INTO books (title, author, categoryid, price) VALUES(?)', [title, author, categoryid, price] )

const editBook= async (title:string, author:string, categoryid:string, price:number, id:number)=>Query(`UPDATE books SET title='${title}', author='${author}', categoryid='${categoryid}', price='${price}' WHERE id='${id}'`)

const deleteBook = async(id:number)=>Query('DELETE from books WHERE id=?', [id])


export default{
    allBooks,
    oneBook,
    addNew,
    editBook,
    deleteBook
}