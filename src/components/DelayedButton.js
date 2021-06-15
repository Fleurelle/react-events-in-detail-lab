// Code DelayedButton Component Here
import React from 'react'
import 'raf/polyfill';

class DelayedButton extends React.Component {
    delayedCLickFunction = (event) => {
        event.persist();  // Prevents React from resetting its properties:

        // setTimeout Syntax setTimeout(function, milliseconds, param1, param2, ...)
        setTimeout(() => {
            {this.props.onDelayedClick(event)}
        }, this.props.delay)

    }

    render() {
        return (
            <div>
                <button onClick={this.delayedCLickFunction}>DELAY BUTTON</button>
            </div>

        )
    }
}

export default DelayedButton;