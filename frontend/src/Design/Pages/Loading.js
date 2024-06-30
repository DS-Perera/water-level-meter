import React from "react";

export default function Loading() {
  return (
    <div className="loading-container">
      <div>
        <h1>Tank Analytics</h1>
        <h5 className="text-center">
          System Loading
          <span className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </h5>
      </div>
    </div>
  );
}
