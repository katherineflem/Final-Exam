import * as React from 'react'
import { json, SetAccessToken } from '../utils/api';
import { RouteComponentProps } from 'react-router';

class Login extends React.Component<LoginProps, LoginState>{
    constructor(props: LoginProps) {
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
            let login = await json(`/auth/login/`, 'POST', Details)
            this.setState(login)
            if (login) {
                SetAccessToken(login.token, { userid: login.userid, role: login.role })
                if (login.role === 'admin') {
                    this.props.history.push('/')
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
                            <label>Category Id:</label>
                        </form>
                        <button
                            onClick={this.handleSubmit}
                        >Login</button>

                    </div>
                </div>
            </div>
        )
    }
}

interface LoginState {
    email: string,
    password: string,
    name: string,

}
interface LoginProps extends RouteComponentProps<{ id: string }> { }

export default Login