import React, { useState } from "react";
import { Button } from "react95";
import WeatherModal from "./WeatherModal";

function WeatherButton({ setWeatherActive }) {
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
        Weather.exe
      </Button>
      {activeTab && (
        <WeatherModal setWeatherActive={setWeatherActive} />
      )}
    </>
  );
}

export default WeatherButton;
