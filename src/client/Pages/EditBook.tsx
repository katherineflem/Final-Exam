import * as React from 'react'
import { json } from '../utils/api';
import { RouteComponentProps } from 'react-router';

class EditBook extends React.Component<EditBookProps, EditBookState>{
    constructor(props: EditBookProps) {
        super(props);
        this.state = {
            title: '',
            author: '',
            price: '',
            categoryid: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)

    }

    async componentDidMount() {
        try {
            let book = await json(`/api/books/${this.props.match.params.id}`)
            this.setState({
                title: book.title,
                author: book.author,
                price: book.price,
                categoryid: book.categoryid
            })
        } catch (e) {
            console.log(e)
        }
    }

    async handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        let editedDetails = {
            title: this.state.title,
            author: this.state.author,
            price: this.state.price,
            categoryid: this.state.categoryid
        }
        try {
            await json(`/api/books/${this.props.match.params.id}`, 'PUT', editedDetails)
            this.props.history.push('/')
        } catch (e) {
            console.log(e)
        }
    }

    async handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        try {
            await json(`/api/books/${this.props.match.params.id}`, 'DELETE')
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

                        </form>
                        <button
                            onClick={this.handleSubmit}
                        >Submit Changes</button>
                        <button
                            onClick={this.handleDelete}
                        >Delete Book</button>
                    </div>
                </div>
            </div>
        )
    }
}

interface EditBookState {
    title: string,
    author: string,
    price: string,
    categoryid: string
}
interface EditBookProps extends RouteComponentProps<{ id: string }> { }

export default EditBook