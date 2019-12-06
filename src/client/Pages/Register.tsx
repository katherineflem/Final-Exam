import * as React from 'react'
import { json, SetAccessToken } from '../utils/api';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

class Register extends React.Component<RegisterProps, RegisterState>{
    constructor(props: RegisterProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }



    async handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        let Details = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
        }
        try {
            let Register = await json(`/auth/Register/`, 'POST', Details)
            this.setState(Register)
            if (Register) {
                SetAccessToken(Register.token, { userid: Register.userid, role: Register.role })
                if (Register.role === 'admin') {
                    this.props.history.push('/')
                    console.log('success!')
                } else {
                    this.props.history.push('/register')
                }
            }
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
                    <h3 className='text-center'>Register Page</h3>

                        <form className="form-group">
                            <label>Email:</label>
                            <input
                                value={this.state.email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ email: e.target.value }) }}
                                type="text" className="form-control" />
                            <label>Password:</label>
                            <input
                                value={this.state.password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ password: e.target.value }) }}
                                type="text" className="form-control" />
                            <label>Name:</label>
                            <input
                                value={this.state.name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ name: e.target.value }) }}
                                type="text" className="form-control" />
                        </form>
                        <button
                            onClick={this.handleSubmit}
                        >Register</button>
                          <div className='text-center'>
                        <p>Already have an account?</p>
                        <Link to ={'/login'}>Login Here</Link>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

interface RegisterState {
    email: string,
    password: string,
    name: string,

}
interface RegisterProps extends RouteComponentProps<{ id: string }> { }

export default Register