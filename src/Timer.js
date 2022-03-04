import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import ResetButton from "./ResetButton";
import Settings from "./Settings";

const red = "rgb(229, 0, 0)";
const green = "rgb(0, 229, 0)";

function Timer() {
  return (
    <div>
      <CircularProgressbar
        value={60}
        text={`60%`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: red,
          tailColor: "rgba(255, 255, 255, .2)",
        })}
      />
      <div className="buttons" style={{ marginTop: "20px" }}>
        <PlayButton />
        <PauseButton />
        <ResetButton />
      </div>
      <div className="Settings">
        <Settings />
      </div>
    </div>
  );
}

export default Timer;
