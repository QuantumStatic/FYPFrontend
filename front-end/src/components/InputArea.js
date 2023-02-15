import React, { Component } from 'react'

export class InputArea extends Component {
    render() {
        return (
            <React.Fragment>
                
                <form action="https://httpbin.org/get" method="get">
                    <fieldset>
                        <legend>Input Area</legend>
                        {/* Text Box Code */}
                        <label htmlFor = "inputText" /> 
                        <textarea name= "inputText" id="inputText" placeholder="Paste your text here..." cols="40" rows = "5" autoComplete="on" required autoFocus/>

                        {/* Upload File Code */}
                        <br />

                        {/* Submit Button Code */}
                        <button type="submit">Submit</button>
                        <button type='reset'>Reset</button>
                    </fieldset>
                </form>
                
            </React.Fragment>
        );
    }
}

export default InputArea;