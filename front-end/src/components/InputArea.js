import React, { Component } from 'react'

export class InputArea extends Component {
    render() {
        return (
            <React.Fragment>
                
                <form>
                    <label for = "inputText" /> 
                    <input type="text" name= "inputText" id="inputText" placeholder="Paste your text here..." autoComplete="on" required autofocus/>
                </form>
                
            </React.Fragment>
        );
    }
}

export default InputArea;