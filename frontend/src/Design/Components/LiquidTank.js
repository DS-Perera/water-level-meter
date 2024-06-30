import React, { useEffect, useState } from "react";

export default function LiquidTank({ percentage }) {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentPercentage(percentage);
    }, 100); // Delay before starting the animation
  }, [percentage]);

  return (
    <div className="liquid-tank">
      <div className="liquid-background">
        <div
          className="liquid"
          style={{ height: `${currentPercentage}%` }}
        ></div>
      </div>
      <div className="percentage-label">{percentage}%</div>
    </div>
  );
}
