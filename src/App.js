import { useState } from "react";
import "./App.css";
import Settings from "./Settings";
import Timer from "./Timer";

function App() {
  const [showSettings, setShowSettings] = useState(true);

  return (
    <>
      <div className="app">
        <div className="app__Body">
          {showSettings ? <Settings /> : <Timer />}
        </div>
      </div>
    </>
  );
}

export default App;
