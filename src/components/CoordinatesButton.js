// Code CoordinatesButton Component Here
import React from 'react'
import 'raf/polyfill';

class CoordinatesButton extends React.Component {
    receiveCoordinateFunction = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <div>
                <button onClick={this.receiveCoordinateFunction}> COORDS BUTTON </button>
            </div>
        )
    }
}

export default CoordinatesButton;