import React, { useState } from "react";
import { Button } from "react95";
import About from "../components/About";

function Tab({setShowButton, showButton}) {
  const [activeTab, setActiveTab] = useState(true);

  //Activates tab background when being used
  const handleActiveTab = () => {
    setActiveTab(!activeTab);
  };

  return (
    <>
    <Button
      onClick={handleActiveTab}
      active={activeTab}
      style={{ fontWeight: "bold" }}
    >
      <img
        src={require("../assets/aboutfile.png")}
        alt="aboutlogo"
        style={{ marginLeft: -2, marginRight: 5, width: 20 }}
      />
      About
    </Button>
      {activeTab && <About showButton={showButton} setShowButton={setShowButton}/>}
    </>
  );
}

export default Tab;
