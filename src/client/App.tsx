import * as React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Listing from './Pages/Listing'
import Nav from './Components/nav';

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
                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

interface AppState { }
interface AppProps { }

export default App