import React, { Component } from 'react';
import styles from './InputArea.module.css'; 
import { isMobile } from 'react-device-detect';


export class InputArea extends Component {

    getFormStyle() {
        let style = {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            height: "100%",
            padding: "1%",
            resize: "inherit",
        };
        style["width"] = isMobile ? "90%" : "60%";
        return style;
    }

    render() {
        return (
            <React.Fragment>
                <form style = {this.getFormStyle()} action="https://httpbin.org/get" method="get">
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