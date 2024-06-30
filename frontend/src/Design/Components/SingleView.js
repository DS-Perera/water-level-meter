import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Charts1 from "./Charts1";
import Charts2 from "./Charts2";

export default function SingleView() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="p-3 border bg-light">Column 1, Row 1</div>
        </div>
        <div className="col">
          <div className="p-3 border bg-light">Column 2, Row 1</div>
        </div>
      </div>
      {/* <Charts1 /> */}
      <Charts2 />
    </div>
  );
}
