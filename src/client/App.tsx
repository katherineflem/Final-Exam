import * as React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Listing from './Pages/Listing'
import Nav from './Components/nav';
import Details from './Pages/Details'
import EditBook from './Pages/EditBook';
import AddBook from './Pages/AddBook';
import Login from './Pages/Login';

class App extends React.Component<AppProps, AppState>{
    constructor(props: AppProps) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Listing}></Route>
                    <Route exact path='/details/:id' component={Details}></Route>
                    <Route exact path='/edit/:id' component={EditBook}></Route>
                    <Route exact path='/new' component={AddBook}></Route>
                    <Route exact path='/login' component={Login}></Route>


                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

interface AppState { }
interface AppProps { }

export default App