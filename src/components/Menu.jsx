import React, { useEffect, useRef, useState } from "react";
import { Button, Separator, MenuList, MenuListItem } from "react95";
import TabButton from "./TabButton";
import windowsSound from "../assets/windowsSound.mp3";

function Menu() {
  //Display active menulist and show button tabs
  const [active, setIsActive] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [sound, setSound] = useState(true);
  const [activeTab, setActiveTab] = useState(true);

  //Display dropdown menu list and activate background when clicked
  const handleActiveClick = () => {
    setIsActive(!active);
  };

  //Display about button onto window when clicked
  const handleClickAbout = () => {
    setShowButton(true);
    setActiveTab(true)
  };

  const handleActiveSound = () => {
    setSound(!sound);
    new Audio(windowsSound).play();
  };

  //Close menu when clicking outside menu
  const menuRef = useRef();
  useEffect(() => {
    const checkOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", checkOutsideClick);
    return () => {
      document.removeEventListener("mousedown", checkOutsideClick);
    };
  }, [active]);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {active && (
        <MenuList
          ref={menuRef}
          onClick={handleActiveClick}
          style={{
            position: "absolute",
            left: "0",
            bottom: "100%",
          }}
        >
        <MenuListItem onClick={handleActiveSound}>
            {sound ? 'Sound on to enjoy' : 'Click again for more'}
          </MenuListItem>
          <Separator />
          <MenuListItem onClick={handleClickAbout}>
            <img
              style={{ width: 22, marginRight: 8 }}
              src={require("../assets/computer.png")}
              alt="aboutLogo"
            />
            <span>About</span>
          </MenuListItem>
          <MenuListItem>
            <img
              style={{ width: 22, marginRight: 8 }}
              src={require("../assets/file.png")}
              alt="aboutLogo"
            />
            <a
              href="https://github.com/paul-nguyen96/Retro95"
              style={{ cursor: "default" }}
            >
              GitHub Repo
            </a>
          </MenuListItem>
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
        Retro95
      </Button>
      {showButton && (
        <TabButton showButton={showButton} setShowButton={setShowButton} activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
    </div>
  );
}

export default Menu;
