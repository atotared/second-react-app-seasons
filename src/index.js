import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      // Geolocation API that accepts 2 callback functions as arguments
      (position) => console.log(position), // Success callback
      (err) => console.log(err) // Reject callback
    );
    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
