import * as React from 'react'
import { json } from '../utils/api';
import { RouteComponentProps } from 'react-router';

class EditBook extends React.Component<EditBookProps, EditBookState>{
    constructor(props: EditBookProps) {
        super(props);
        this.state = {
            title: '',
            author: '',
            price: 0,
            categoryid: ''
        }
    }

    async componentDidMount(){
        try{
        let book = await json(`/api/books/${this.props.match.params.id}`)
        this.setState({
            title: book.title,
            author: book.author,
            price: book.price,
            categoryid: book.categoryid
        })
        }catch(e){
            console.log(e)
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <form className="form-group">
                            <label>Title:</label>
                            <input
                                value={this.state.title}
                                onChange={}
                                type="text" className="form-control" />
                            <label>Author:</label>
                            <input
                                value={this.state.author}
                                onChange={}
                                type="text" className="form-control" />
                            <label>Price:</label>
                            <input
                                value={this.state.price}
                                onChange={}
                                type="text" className="form-control" />
                            <label>Category Id:</label>
                            <input
                                value={this.state.categoryid}
                                onChange={}
                                type="text" className="form-control" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

interface EditBookState {
    title: string,
    author: string,
    price: number,
    categoryid: string
 }
interface EditBookProps extends RouteComponentProps<{id:string}>{ }

export default EditBook