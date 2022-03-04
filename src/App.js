import { useState } from "react";
import "./App.css";
import Settings from "./Settings";
import SettingsContext from "./SettingsContext";
import Timer from "./Timer";

function App() {
  const [showSettings, setShowSettings] = useState(true);
  const [workMinutes, setWorkMinutes] = useState("25");
  const [breakMinutes, setBreakMinutes] = useState("5");

  return (
    <>
      <div className="app">
        <div className="app__Body">
          <SettingsContext.Provider
            value={{
              showSettings,
              setShowSettings,
              workMinutes,
              breakMinutes,
              setWorkMinutes,
              setBreakMinutes,
            }}
          >
            {showSettings ? <Settings /> : <Timer />}
          </SettingsContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
