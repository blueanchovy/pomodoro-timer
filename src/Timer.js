import React, { useContext, useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import ResetButton from "./ResetButton";
import SettingsButton from "./SettingsButton";
import SettingsContext from "./SettingsContext";

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [mode, setMode] = useState("Work"); //Work, Break

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === "Work" ? "Break" : "Work";
      const nextSeconds =
        (nextMode === "Work"
          ? settingsInfo.workMinutes
          : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [settingsInfo]);

  const totalSeconds =
    mode === "Work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={mode + " -> " + minutes + ":" + seconds}
        styles={buildStyles({
          textSize: "10px",
          textColor: "#fff",
          pathColor: mode === "Work" ? "var(--red)" : "rgb(0,255,0)",
          tailColor: "rgba(255, 255, 255, .2)",
        })}
      />
      <div className="buttons" style={{ marginTop: "20px" }}>
        {!isPaused ? (
          <>
            <PauseButton
              onClick={() => {
                setIsPaused(true);
                isPausedRef.current = true;
              }}
            />
          </>
        ) : (
          <PlayButton
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        )}

        <ResetButton
          onClick={() => {
            setSecondsLeft(settingsInfo.workMinutes * 60);
            secondsLeftRef.current = settingsInfo.workMinutes * 60;
            setIsPaused(true);
            isPausedRef.current = true;
          }}
        />
      </div>
      <div className="Settings">
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  );
}

export default Timer;
