import React from "react";
import "./Clock.css";

class Clock extends React.Component {
  state = { time: new Date().toLocaleTimeString() };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() }); // -setState- is a method that, through -this- keyword, has direct access to component's -state- object.
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <p>The time is: {this.state.time}</p>
      </div>
    );
  }
}

export default Clock;
