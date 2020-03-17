import React, { Component } from 'react'

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

 class Clock extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
          date: ``
        };
      }
    startTime() {
        const today = new Date();
        const h = today.getHours();
        const m = checkTime(today.getMinutes());
        const s = checkTime(today.getSeconds());
    
        this.setState({ date: h + ":" + m + ":" + s });
        this.timeout = setTimeout(() => this.startTime(),500);
      }
    
      componentDidMount() {
        this.startTime();
      }
    render() {
        return (
            <div>
                {this.state.date}
            </div>
        )
    }
}

export default Clock
