import * as React from 'react';
import { json } from '../utils/api'
import { Link } from 'react-router-dom';
import {RouteComponentProps} from 'react-router'
class Details extends React.Component<IDetailsProps, IDetailsState> {

    constructor(props: IDetailsProps) {
        super(props);
        this.state = {
            book: {
                id: 0,
                categoryid: 0,
                title: '',
                author: '',
                price: 0,
                _created: new Date(),
                name: ''
            }
        }
    }


    async componentWillMount() {
        try {
            let book = await json(`/api/books/${this.props.match.params.id}`);
            this.setState({ book });
            console.log(book)
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <main className="container my-5">
                <div className="row">
                    <div className="col">
                        <div className="card m-2 shadow">
                            <div className="card-header text-center">
                                <h3>{this.state.book.title}</h3>
                            </div>
                            <div className="card-body text-center">
                                <p>Author: {this.state.book.author}</p>
                                <p>Price: ${this.state.book.price}</p>
                                <span className='badge'>Category:{this.state.book.name}</span>
                            </div>
                            <Link className='text-center btn btn-light' to={`/edit/${this.state.book.id}`}>Edit This Book</Link>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export interface IDetailsProps extends RouteComponentProps<{ id: string }> { }

export interface IDetailsState {
    book: {
        id: number,
        categoryid: number,
        title: string,
        author: string,
        price: number,
        _created: Date,
        name: string
    }
}
export default Details;