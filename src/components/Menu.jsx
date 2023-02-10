import React from "react";
import { Button, Divider, List, ListItem } from "react95";

function Menu() {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <List style={{ position: "absolute", left: "0", top: "100%" }}>
        <ListItem>
          <img
            style={{ width: 22, marginRight: 8 }}
            src={require("../assets/file.png")}
            alt="aboutLogo"
          />
          <span>GitHub Repo</span>
        </ListItem>
        <ListItem>
          <img
            style={{ width: 22, marginRight: 8 }}
            src={require("../assets/computer.png")}
            alt="aboutLogo"
          />
          <span>About</span>
        </ListItem>
        <Divider />
        <ListItem>
        Startup Sound: On
        </ListItem>
      </List>
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
