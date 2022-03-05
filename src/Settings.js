import React, { useContext } from "react";
import ReactSlider from "react-slider";
import BackButton from "./BackButton";
import "./Settings.css";
import SettingsContext from "./SettingsContext";

function Settings() {
  const settingsInfo = useContext(SettingsContext);

  return (
    <div>
      <label>Work Minutes: {settingsInfo.workMinutes}:00 Minutes</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.workMinutes}
        min={1}
        max={120}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
      />
      <label>Break Minutes: {settingsInfo.breakMinutes}:00 Minutes</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.breakMinutes}
        min={1}
        max={120}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
      />

      <div className="BackButton">
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
  );
}

export default Settings;
