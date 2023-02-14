import React, { useState } from "react";

function Weather({ setWeatherActive }) {
  const [highlight, setHighlight] = useState(false);

  const handleHighlight = () => {
    setHighlight(true);
  };

  const handleClick = () => {
    setWeatherActive(true);
    setHighlight(false);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 10,
        left: 10,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: highlight && "dotted 1px black",
        padding: 5,
        color: "white",
      }}
      onClick={handleHighlight}
      onDoubleClick={handleClick}
    >
      <img
        style={{ width: 60 }}
        src={require("../../assets/weather.png")}
        alt="aboutLogo"
      />
      <span style={{ fontSize: 16, backgroundColor: highlight && "blue" }}>
        Weather
      </span>
    </div>
  );
}

export default Weather;
