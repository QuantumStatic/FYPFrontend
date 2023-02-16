import React, { Component } from 'react'
import styles from './InputArea.module.css'; 

export class InputArea extends Component {
    render() {
        return (
            <React.Fragment>
                
                <form action="https://httpbin.org/get" method="get">
                    <fieldset>
                        <legend align="left">Input Area</legend>
                                {/* Text Box Code */}
                                <label htmlFor = "inputText" /> 
                                <textarea name= "inputText" id="inputText" placeholder="Paste your text here..." autoComplete="on" required autoFocus/>

                                {/* Upload File Code */}
                                
                                <br />

                                {/* Submit/Reset Button Code */}
                                <button type="submit" class="btn btn-outline-dark">Submit</button>
                                <button type='reset' class="btn btn-outline-dark">Reset</button>
                    </fieldset>
                </form>
                
            </React.Fragment>
        );
    }
}

export default InputArea;