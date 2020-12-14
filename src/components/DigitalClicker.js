import React from 'react'

class DigitalClicker extends React.Component {

    state = {
        timesClicked: 0
    }

    clickHandler = () => {
        const prevState = this.state.timesClicked
        this.setState({timesClicked: prevState + 1})
    }

    
    render () {
        
        return(
        <div>
            <h2>Times Clicked: {this.state.timesClicked}</h2>
            <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
        </div>
        )
    }
}

export default DigitalClicker

