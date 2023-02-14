import React, { useState } from "react";

function Stocks({ setStocksActive }) {
  const [highlight, setHighlight] = useState(false);

  const handleHighlight = () => {
    setHighlight(true);
  };

  const handleDoubleClick = () => {
    setStocksActive(true)
    setHighlight(false);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 110,
        left: 10,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: highlight && "dotted 1px black",
        padding: 5,
      }}
      onClick={handleHighlight}
      onDoubleClick={handleDoubleClick}
    >
      <img
        style={{ width: 60 }}
        src={require("../../assets/stonks.png")}
        alt="aboutLogo"
      />
      <span
        style={{
          fontSize: 16,
          backgroundColor: highlight && "blue",
          color: "white",
        }}
      >
        Stocks
      </span>
    </div>
  );
}

export default Stocks;
