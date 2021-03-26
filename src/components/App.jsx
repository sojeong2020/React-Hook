import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString("en-GB");
  setInterval(updateTime, 1000);

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-GB");
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
