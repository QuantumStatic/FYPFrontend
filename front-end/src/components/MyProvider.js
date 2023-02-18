import React, { Component } from 'react'

export const MContext = React.createContext(null); 

class MyProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {message: "Hit submit to see unbiased output"}
    }
    
    render() {
        return (
            <MContext.Provider value={
                {state: this.state, setMessage: (value) => this.setState({ message: value })}
            }>
            {this.props.children}   
            </MContext.Provider>)
    }
}

export default MyProvider;