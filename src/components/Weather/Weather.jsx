import React, { useState, useRef, useEffect } from "react";

function Weather() {
  const [doubleClick, setDoubleClick] = useState(false);
  const [highlight, setHighlight] = useState(false);

  const handleHighlight = () => {
    setHighlight(true);
  };

  const handleDoubleClick = () => {
    console.log("double click");
    setDoubleClick(!doubleClick);
    setHighlight(false)
  };

  const weatherRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (weatherRef.current && !weatherRef.current.contains(e.target)) {
        setHighlight(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [highlight]);

  return (
    <div
      useRef={weatherRef}
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
      onDoubleClick={handleDoubleClick}
    >
      <img
        style={{ width: 35 }}
        src={require("../../assets/weather.png")}
        alt="aboutLogo"
      />
      <span style={{ fontSize: 12}}>
        Weather
      </span>
    </div>
  );
}

export default Weather;
