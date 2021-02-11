import React from "react";

const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.message}</div>
    </div>
  );
};

// Default props would kick in if no message is passed to the rendered Spinner component (in index.js)
// Same as {props.message || "Loading"}, just more elegant.
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
