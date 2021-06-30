import React from "react";
import "./App.css";

function App() {
  const sellOrder = () => {
    fetch("api/push/sellOrder");
  };
  return (
    <div>
      <header className="appHeader">
        <img src="images/logo512.png" className="appLogo" alt="logo" />
        <div>Saxo Trader</div>
      </header>

      <div className="card">
        <span>Portfolio</span>
        <div className="stock">
          <div>Tesla</div>
          <div>100</div>
          <div className="button" onClick={sellOrder}>
            Sell Tesla
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
