import React, { useEffect, useState } from "react";

export default function LiquidTank({ percentage }) {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCurrentPercentage(percentage);
    }, 100); // Delay before starting the animation
  }, [percentage]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`liquid-tank ${isHovered ? "shaking" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
