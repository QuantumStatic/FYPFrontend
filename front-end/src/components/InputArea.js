import React, { Component } from 'react';
import './InputArea.css'; 
import { isMobile } from 'react-device-detect';


export class InputArea extends Component {

    getFormID() {
        return isMobile? "inputAreaContainerMobile" : "inputAreaContainer";
    }

    render() {
        return (
            <React.Fragment>
                <form id= {this.getFormID()} action="https://httpbin.org/get" method="get">
                    <fieldset>
                        <legend align="left">Input Area</legend>
                            {/* Text Box Code */}
                            <label htmlFor = "inputText" /> 
                            <textarea name= "inputText" id="inputText" placeholder="Paste your text here..." autoComplete="on" required autoFocus/>

                            {/* Upload File Code */}
                            
                            <br />

                            {/* Submit/Reset Button Code */}
                            <button type="submit">Submit</button>
                            <button type='reset'>Reset</button>
                    </fieldset>
                </form>
            </React.Fragment>
        );
    }
}

export default InputArea;