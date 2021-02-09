import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  /* constructor(props) {
    super(props); // super is a reference to the parent's (React.Component) constructor function
    // console.log(this.state); => OUTPUT: undefined
    this.state = { lat: null, errorMessage: "" }; // This is the "state" object: it's a JS object with a property of "lat", assigned to this.state
    // console.log(this.state); => OUTPUT: {lat: null}
  } */
  // Thanks to Babel, the above constructor is equivalent to:
  state = { lat: null, errorMessage: "" };

  // React's best practices say it's preferrable to place data loading code inside componentDidMount()
  // instead of the constructor (data loading that we want to perform just once)
  componentDidMount() {
    console.log("Component was first rendered!");
    window.navigator.geolocation.getCurrentPosition(
      // Geolocation API that accepts 2 callback functions as arguments
      (position) => this.setState({ lat: position.coords.latitude }), // Success callback - always call setState() to update "state"
      (err) => this.setState({ errorMessage: err.message }) // Reject callback
    );
  }

  // React's best practices say it's preferrable to place data loading code inside componentDidMount()
  // instead of the constructor (data loading that we want to perform on each component's update)
  componentDidUpdate() {
    console.log("Component was udpated!");
  }

  componentWillUnmount() {
    console.log("This is used for cleanup.");
  }

  render() {
    if (!this.state.errorMessage && this.state.lat) {
      console.log(this);
      return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>; // Take state of parent component and pass it as a prop to a child
    } else if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else {
      return <div>Loading!</div>;
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
