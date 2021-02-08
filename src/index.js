import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props); // super is a reference to the parent's (React.Component) constructor function
    // console.log(this.state); => OUTPUT: undefined
    this.state = { lat: null, errorMessage: "" }; // This is the "state" object: it's a JS object with a property of "lat", assigned to this.state
    // console.log(this.state); => OUTPUT: {lat: null}

    window.navigator.geolocation.getCurrentPosition(
      // Geolocation API that accepts 2 callback functions as arguments
      (position) => this.setState({ lat: position.coords.latitude }), // Success callback - always call setState() to update "state"
      (err) => this.setState({ errorMessage: err.message }) // Reject callback
    );
  }

  componentDidMount() {
    console.log("Component was first rendered!");
  }

  componentDidUpdate() {
    console.log("Component was udpated!");
  }

  render() {
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    } else if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else {
      return <div>Loading!</div>;
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
