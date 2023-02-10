import React from "react";
import { Button, Separator, MenuList, MenuListItem} from "react95";

function Menu() {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <MenuList style={{ position: "absolute", left: "0", top: "100%" }}>
        <MenuListItem>
          <img
            style={{ width: 22, marginRight: 8 }}
            src={require("../assets/file.png")}
            alt="aboutLogo"
          />
          <span>GitHub Repo</span>
        </MenuListItem>
        <MenuListItem>
          <img
            style={{ width: 22, marginRight: 8 }}
            src={require("../assets/computer.png")}
            alt="aboutLogo"
          />
          <span>About</span>
        </MenuListItem>
        <Separator />
        <MenuListItem>
        Start
        </MenuListItem>
      </MenuList>
      <Button style={{ fontWeight: "bold", marginRight: 6 }}>
        <img
          src={require("../assets/windows.png")}
          alt="winlogo"
          style={{ marginLeft: -2, marginRight: 5, width: 20 }}
        />
        Recipe95
      </Button>
    </div>
  );
}

export default Menu;
