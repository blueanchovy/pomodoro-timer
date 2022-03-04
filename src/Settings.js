import React from "react";
import ReactSlider from "react-slider";
import "./Settings.css";

function Settings() {
  return (
    <div>
      <label>Work Minutes:</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={45}
        min={1}
        max={120}
      />
      <label>Break Minutes:</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={45}
        min={1}
        max={120}
      />
    </div>
  );
}

export default Settings;
