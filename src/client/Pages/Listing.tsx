import * as React from 'react';
import { IBooks } from '../utils/interfaces';
import {json}from '../utils/api'
import { Link } from 'react-router-dom';

class Listing extends React.Component<IListingProps, IListingState> {

    constructor(props: IListingProps) {
        super(props);
        this.state = {
            books:[]
        };
    }

    async componentWillMount() {
        try {
            let books = await json('/api/books');
            this.setState({ books });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <main className="container my-5">
                <div className="row">
                    <div className="col">
                        {this.state.books.map(book=>{
                            return(
                                <div className="card m-2 shadow" key={book.id}>
                                    <div className="card-header text-center">
                                        <h3>{book.title}</h3>
                                    </div>
                                    <div className="card-body text-center">
                                        <p>Author: {book.author}</p>
                                        <p>Price: ${book.price}</p>
                                        <span className='badge'>Category:{book.name}</span>
                                    </div>
                                    <Link className='text-center'to ={`/details/${book.id}`}>More Details...</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
        )
    }
}

export interface IListingProps { }

export interface IListingState {
    books: IBooks[];
}

export default Listing;