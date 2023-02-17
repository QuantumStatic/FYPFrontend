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
                <fieldset id = {this.getFormID()} className="MyFieldset">
                    <legend align="left">Input Area</legend>
                        <form action="https://httpbin.org/post" method="post">
                            {/* Text Box Code */}
                            <label htmlFor = "inputText" /> 
                            <textarea name= "inputText" id="inputText" placeholder="Paste your text here..." autoComplete="on" required autoFocus/>

                            <br />

                            {/* Submit/Reset Button Code */}
                            <button type="submit">Submit</button>
                            <button type='reset'>Reset</button>
                        </form>
                    
                        {/* Upload File Code */}

                </fieldset>
            </React.Fragment>
        );
    }
}

export default InputArea;