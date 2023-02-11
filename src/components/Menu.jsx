import React, { useEffect, useRef, useState } from "react";
import { Button, Separator, MenuList, MenuListItem } from "react95";
import TabButton from "./TabButton";

function Menu() {
  const [active, setIsActive] = useState(false);
 
  
  const [showButton, setShowButton] = useState(false);

  //Display active menu list and activate background when clicked
  const handleActiveClick = () => {
    setIsActive(!active);
  };

  //Display about/foods button onto window when clicked
  const clickAbout = () => {
    setShowButton(true);
  };

  //Close menu when clicking outside menu
  const ref = useRef();
  useEffect(() => {
    const checkOutsideClick = (e) => {
      if (
        active &&
        ref.current &&
        showButton &&
        !ref.current.contains(e.target)
      ) {
        setIsActive(!active);
      }
    };
    document.addEventListener("mousedown", checkOutsideClick);
    return () => {
      document.removeEventListener("mousedown", checkOutsideClick);
    };
  }, [active, showButton]);

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      {active && (
        <MenuList
          onClick={handleActiveClick}
          style={{
            position: "absolute",
            left: "0",
            top: "100%",
          }}
        >
          <MenuListItem>
            <img
              style={{ width: 22, marginRight: 8 }}
              src={require("../assets/file.png")}
              alt="aboutLogo"
            />
            <a
              href="https://github.com/paul-nguyen96/Recipe95"
              style={{ cursor: "default" }}
            >
              GitHub Repo
            </a>
          </MenuListItem>
          <MenuListItem onClick={clickAbout}>
            <img
              style={{ width: 22, marginRight: 8 }}
              src={require("../assets/computer.png")}
              alt="aboutLogo"
            />
            <span>About</span>
          </MenuListItem>
          <Separator />
          <MenuListItem>Start</MenuListItem>
        </MenuList>
      )}
      <Button
        onClick={handleActiveClick}
        active={active}
        style={{ fontWeight: "bold", marginRight: 6 }}
      >
        <img
          src={require("../assets/windows.png")}
          alt="winlogo"
          style={{ marginLeft: -2, marginRight: 5, width: 20 }}
        />
        Recipe95
      </Button>
      {showButton && <TabButton />}
    </div>
  );
}

export default Menu;
