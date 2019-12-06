import * as React from 'react';

class Listing extends React.Component<IListingProps, IListingState> {

    constructor(props: IListingProps) {
        super(props);
        this.state = {
            name: null
        };
    }

    async componentWillMount() {
        try {
            let r = await fetch('/api/hello');
            let name = await r.json();
            this.setState({ name });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <main className="container my-5">
                <h1 className="text-primary text-center">Hello {this.state.name}!</h1>
            </main>
        )
    }
}

export interface IListingProps { }

export interface IListingState {
    name: string;
}

export default Listing;