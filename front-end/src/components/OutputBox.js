import React, { Component } from 'react'
import './OutputBox.css';
import { isMobile } from 'react-device-detect';

export class OutputBox extends Component {

    getUnBiasedText() {
        return "If you are using the display property to define your div as a flex container, then you can't use the method above to center text vertically within the div. Instead, you have to use the align-items property with the value center. Let's create the same div as above, giving it the class name .center. Set display to flex to make the div a flex container. To more clearly see that the text is vertically centered, define the height property as well. Otherwise, the flex container will only be as tall as it needs to be to contain the paragraph inside. Then, set the align-items property to center."
    }

    getOutputAreaContainerID() {
        if (isMobile) {
            return "ouputAreaContainerMobile";
        } else {
            return "ouputAreaContainer";
        }
    }

    render() {
        return (
            <React.Fragment>
                
                <div id={this.getOutputAreaContainerID()}>
                    <fieldset>
                        <legend align="left">Output Area</legend>
                        <div id="outputTextBox">
                            {this.getUnBiasedText()}
                        </div>
                    </fieldset>
                </div>
                
            </React.Fragment>
        );
    }
}

export default OutputBox;