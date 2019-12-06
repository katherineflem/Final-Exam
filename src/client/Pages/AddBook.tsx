import * as React from 'react'
import { json, User } from '../utils/api';
import { RouteComponentProps } from 'react-router';
// import { ICategories } from '../utils/interfaces';

class AddBook extends React.Component<AddBookProps, AddBookState>{
    constructor(props: AddBookProps) {
        super(props);
        this.state = {
            title: '',
            author: '',
            price: '',
            categoryid: ''
            // selectedCategory: '',
            // categories: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }


    async componentDidMount() {
        let Details = {
            title: this.state.title,
            author: this.state.author,
            price: this.state.price,
            categoryid: this.state.categoryid
            // selectedCategory: this.state.selectedCategory
        }

        if (!User || User.userid === null || User.role !== 'admin') {
            alert('you must login or register to post')
            this.props.history.replace('/login')
        } else {

            try {
                let newBook = await json('/api/books', 'POST', Details)
                // let categories= await json('/api/categories')
                this.setState(newBook)
            } catch (e) {
                console.log(e)
            }
        }
    }

    async handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        let Details = {
            title: this.state.title,
            author: this.state.author,
            price: this.state.price,
            categoryid: this.state.categoryid
            // selectedCategory: this.state.selectedCategory

        }
        try {
            let newBook = await json(`/api/books/`, 'POST', Details)
            this.setState(newBook)
            this.props.history.push('/')
        } catch (e) {
            console.log(e)
        }
    }


    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h3 className='text-center'>Add New Book Page</h3>
                        <form className="form-group">
                            <label>Title:</label>
                            <input
                                value={this.state.title}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ title: e.target.value }) }}
                                type="text" className="form-control" />
                            <label>Author:</label>
                            <input
                                value={this.state.author}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ author: e.target.value }) }}
                                type="text" className="form-control" />
                            <label>Price:</label>
                            <input
                                value={this.state.price}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ price: e.target.value }) }}
                                type="text" className="form-control" />
                            <label>Category Id:</label>
                            <input
                                value={this.state.categoryid}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ categoryid: e.target.value }) }}
                                type="text" className="form-control" />
                            {/* <select
                                className='form-control'
                                value={this.state.selectedCategory}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { this.setState({ selectedCategory: e.target.value }) }}>
                                <option>Choose Tag</option>
                                {this.state.categories.map(category=> {
                                    return (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    )
                                })}
                            </select> */}

                        </form>
                        <button
                            onClick={this.handleSubmit}
                        >Submit Changes</button>

                    </div>
                </div>
            </div>
        )
    }
}

interface AddBookState {
    title: string,
    author: string,
    price: string,
    categoryid: string
    // selectedCategory: string

    // categories: ICategories[]
}

interface AddBookProps extends RouteComponentProps<{ id: string }> { }

export default AddBook