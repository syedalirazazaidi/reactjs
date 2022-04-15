import React from "react";
import "./question.css";
function ProgressBar() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Score : 67%</p>
        <p>Max Score : 75%</p>
      </div>

      <div className="miniBar" style={{ borderRadius: "5px" }}>
        <div
          className="miniBarProgress"
          style={{ width: "20%", zIndex: 3, backgroundColor: "#180A0A" }}
        ></div>
        <div
          className="miniBarProgress"
          style={{ width: "60%", zIndex: 2, backgroundColor: "grey" }}
        ></div>
        <div
          className="miniBarProgress"
          style={{ width: "90%", zIndex: 1, backgroundColor: "#EEEEEE" }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
