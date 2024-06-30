import React, { useState, useEffect } from "react";
import LiquidTank from "../Components/LiquidTank";

export default function Dashboard2() {
  // Define the states
  const [inputRate, setInputRate] = useState(13);
  const [outputRate, setOutputRate] = useState(17);
  const [inputAmount, setInputAmount] = useState(130);
  const [outputAmount, setOutputAmount] = useState(140);
  const [filledAmount, setFilledAmount] = useState(70);
  const [waterLevel, setWaterLevel] = useState(70);

  // Define animated values
  const [animatedFilledAmount, setAnimatedFilledAmount] = useState(0);
  const [animatedInputRate, setAnimatedInputRate] = useState(0);
  const [animatedOutputRate, setAnimatedOutputRate] = useState(0);
  const [animatedWaterLevel, setAnimatedWaterLevel] = useState(0);
  const [animatedInputAmount, setAnimatedInputAmount] = useState(0);
  const [animatedOutputAmount, setAnimatedOutputAmount] = useState(0);

  // Function to animate values
  const animateValue = (start, end, duration, setValue) => {
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    const increment = end > start ? 1 : -1;
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      setValue(current);
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  useEffect(() => {
    animateValue(0, filledAmount, 1000, setAnimatedFilledAmount);
    animateValue(0, inputRate, 1000, setAnimatedInputRate);
    animateValue(0, outputRate, 1000, setAnimatedOutputRate);
    animateValue(0, waterLevel, 1000, setAnimatedWaterLevel);
    animateValue(0, inputAmount, 1000, setAnimatedInputAmount);
    animateValue(0, outputAmount, 10, setAnimatedOutputAmount);
  }, [
    filledAmount,
    inputRate,
    outputRate,
    waterLevel,
    inputAmount,
    outputAmount,
  ]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <h2>Analytics</h2>
              </div>
              <div className="col-md-4">
                <div className="card customers">
                  <div className="card-body px-4">
                    <div className="d-flex justify-content-between">
                      <h5>Filled Amount</h5>
                      <p className="percentage">+15.03%</p>
                    </div>
                    <p className="value">{animatedFilledAmount.toFixed(1)}L</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card views">
                  <div className="card-body px-4">
                    <div className="d-flex justify-content-between">
                      <h5>Input Rate</h5>
                      <p className="percentage">+15.03%</p>
                    </div>
                    <p className="value">{animatedInputRate} per Sec</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card customers">
                  <div className="card-body px-4">
                    <div className="d-flex justify-content-between">
                      <h5>Output Rate</h5>
                      <p className="percentage">+15.03%</p>
                    </div>
                    <p className="value">{animatedOutputRate} per Sec</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card views">
                  <div className="card-body px-4">
                    <div className="d-flex justify-content-between">
                      <h5>Water Level</h5>
                      <p className="percentage">+15.03%</p>
                    </div>
                    <p className="value">{animatedWaterLevel} %</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card revenue">
                  <div className="card-body px-4">
                    <div className="d-flex justify-content-between">
                      <h5>Input Amount</h5>
                      <p className="percentage">+15.03%</p>
                    </div>
                    <p className="value">{animatedInputAmount} L</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card customers">
                  <div className="card-body px-4">
                    <div className="d-flex justify-content-between">
                      <h5>Output</h5>
                      <p className="percentage">+15.03%</p>
                    </div>
                    <p className="value">{animatedOutputAmount} L</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="row">
              <div className="col-md-12">
                <h2>Tank Level</h2>
              </div>
            </div>
            <div className="mt-2">
              <LiquidTank percentage={waterLevel} />{" "}
              {/* Add the LiquidTank component here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
