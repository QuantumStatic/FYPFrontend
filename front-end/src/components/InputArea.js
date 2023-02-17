import React, { Component } from 'react';
import './InputArea.css'; 
import { isMobile } from 'react-device-detect';


export class InputArea extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.submitTextToBackend = this.submitTextToBackend.bind(this);
    }

    getFormID() {
        return isMobile? "inputAreaContainerMobile" : "inputAreaContainer";
    }

    submitTextToBackend() {
        // TODO: Send the text to the backend
        alert(`Text Submitted to Backend: ${this.myRef.current.value}`)
    }

    render() {

        return (
            <React.Fragment>
                <fieldset id = {this.getFormID()} className="MyFieldset">
                    <legend align="left">Input Area</legend>
                        <form>
                            {/* Text Box Code */}
                            <label htmlFor = "inputText" /> 
                            <textarea name= "inputText" id="inputText" placeholder="Paste your text here..."  ref={this.myRef} autoComplete="on" required autoFocus/>

                            <br />

                            {/* Submit/Reset Button Code */}
                            <button type="submit" formNoValidate formAction = "" onClick = {this.submitTextToBackend}>Submit</button>
                            <button type='reset'>Reset</button>
                        </form>
                    
                        {/* Upload File Code */}

                </fieldset>
            </React.Fragment>
        );
    }
}

export default InputArea;