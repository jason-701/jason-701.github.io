import React from "react";
import "./horizontalscroll.css";

const HorizontalScroll = ({ items }) => {
  return (
    <div className="horizontal-scroll-container">
      <div className="scroll-content">
        {items.map((item, index) => (
          <div
            key={index}
            className="box"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};
export default HorizontalScroll;
