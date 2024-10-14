import React, { useState } from "react";
import Draggable from "react-draggable";

import OutlookIcon from "../assets/outlook.png";

function OutlookWindow() {
  const nodeRef = React.useRef(null);

  return (
    <Draggable
      handle="#outlook-window-title-bar"
      nodeRef={nodeRef}
      positionOffset={{ x: "0%", y: "20%" }}
    >
      <div ref={nodeRef} className="window" style={{ width: "850px" }}>
        <div className="title-bar" id="outlook-window-title-bar">
          <div className="title-bar-text flex items-center">
            <img src={OutlookIcon.src} />
            <p>Outlook Express</p>
          </div>
          <div className="title-bar-controls">
            <button aria-label="Help" />
            <button aria-label="Close" />
          </div>
        </div>

        <div className="window-body flex justify-normal">
          <p>Hola mundo</p>
        </div>
      </div>
    </Draggable>
  );
}

export default OutlookWindow;
