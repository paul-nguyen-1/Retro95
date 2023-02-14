import React, { useState } from "react";
import { Button } from "react95";
import StocksModal from './StocksModal'

function StocksButton({ setStocksActive }) {
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
        style={{ fontWeight: "bold", marginLeft: 8 }}
      >
        <img
          src={require("../../assets/weather.png")}
          alt="aboutlogo"
          style={{ marginLeft: -2, marginRight: 5, width: 20 }}
        />
        stocks.exe
      </Button>
      {activeTab && (
        <StocksModal setStocksActive={setStocksActive} />
      )}
    </>
  );
}

export default StocksButton;
