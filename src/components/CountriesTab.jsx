import React, { useState } from "react";
import { Button } from "react95";
import CountriesModal from "./CountriesModal";

function CountriesTab({ setShowButton, showButton }) {
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
        style={{ fontWeight: "bold", marginLeft: 7.5 }}
      >
        <img
          src={require("../assets/aboutfile.png")}
          alt="aboutlogo"
          style={{ marginLeft: -2, marginRight: 5, width: 20 }}
        />
        Recipes.exe
      </Button>
      {activeTab && (
        <CountriesModal showButton={showButton} setShowButton={setShowButton} />
      )}
    </>
  );
}

export default CountriesTab;
