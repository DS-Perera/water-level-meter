import React, { useState } from "react";
import Dashboard from "./Pages/Dashboard";
import Design2 from "./Components/Design2";
import Dashboard2 from "./Pages/Dashboard2";

export default function Pages() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <div className="mainBack2 py-3">
      <div className="container">
        <div className="row">
          <h1 className="pt-5 pb-4">Water Consumption Analytics</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            {/* button set Here */}
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className={`btn ${
                  activeButton === 1 ? "btn-primary active" : "btn-custom"
                }`}
                onClick={() => handleButtonClick(1)}
              >
                Tank 01
              </button>
              <button
                type="button"
                className={`btn ${
                  activeButton === 2 ? "btn-primary active" : "btn-custom"
                }`}
                onClick={() => handleButtonClick(2)}
              >
                Tank 02
              </button>
              <button
                type="button"
                className={`btn ${
                  activeButton === 3 ? "btn-primary active" : "btn-custom"
                }`}
                onClick={() => handleButtonClick(3)}
              >
                Tank 03
              </button>
            </div>
          </div>
        </div>
      </div>
      <Dashboard2 />
      {/* <Dashboard /> */}
      <Design2 />
      <div className="container">
        <div className="row">
          <h6 className="text-center">Powered by ABC Inovators</h6>
        </div>
      </div>
    </div>
  );
}
