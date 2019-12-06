import * as React from 'react'
import { Link } from 'react-router-dom';

class Nav extends React.Component<NavProps, NavState>{
    constructor(props: NavProps) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <nav className="form-inline justify-content-center">
                                <Link to={'/'} className='m-5'>View Listing</Link>
                                <Link to={'/new'}className='m-5' >Add New Book</Link>
                                <Link to={'/login'}className='m-5'>Login</Link>
                                <Link to={'/register'}className='m-5'>Register</Link>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

interface NavState { }
interface NavProps { }

export default Nav