import React, { useState, useRef, useEffect } from "react";

function Stonks() {
  const [doubleClick, setDoubleClick] = useState(false);
  const [highlight, setHighlight] = useState(false);

  const handleHighlight = () => {
    setHighlight(true);
  };

  const handleDoubleClick = () => {
    setDoubleClick(!doubleClick);
    setHighlight(false)
  };

 
  const menuRef = useRef();
  useEffect(() => {
    const checkOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setHighlight(false);
      }
    };
    document.addEventListener("click", checkOutsideClick);
    return () => {
      document.removeEventListener("click", checkOutsideClick);
    };
  }, [highlight]);

  return (
    <div
      useref={menuRef}
      style={{
        position: "absolute",
        top: 80,
        left: 15,
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
        style={{ width: 35 }}
        src={require("../../assets/stonks.png")}
        alt="aboutLogo"
      />
      <span
        style={{
          fontSize: 12,
          color: "white",
        }}
      >
        Stonks
      </span>
    </div>
  );
}

export default Stonks;
