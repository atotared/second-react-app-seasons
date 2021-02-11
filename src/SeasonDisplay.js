import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    seasonText: "Let's hit the beach!",
    seasonIcon: "sun",
  },
  winter: {
    seasonText: "Burr, it's chilly!",
    seasonIcon: "snowflake",
  },
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  console.log(props.lat); // Receives state of parent (App component) in index.js as props
  const season = getSeason(props.lat, new Date().getMonth());
  const { seasonText, seasonIcon } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${seasonIcon} icon`} />
      <h1>{seasonText}</h1>
      <i className={`icon-right massive ${seasonIcon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
