import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    // Geolocation API that accepts 2 callback functions as arguments
    (position) => console.log(position), // Success callback
    (err) => console.log(err) // Reject callback
  );
  return (
    <>
      <div>
        <h1>Hello World</h1>
      </div>
      <SeasonDisplay></SeasonDisplay>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
