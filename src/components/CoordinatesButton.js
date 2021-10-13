// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

    handleClick = (event) => {
        const array = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(array)
    }

    render() {
        return(
            <div>
                <button 
                    onClick={this.handleClick}
                />
            </div>
        )
    }
}

export default CoordinatesButton