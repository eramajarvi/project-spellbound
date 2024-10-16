import React, { useState } from "react";
import Draggable from "react-draggable";
import RoverWaiting from "../assets/rover-waiting.mp4";

function RoverWindow({}) {
  const nodeRef = React.useRef(null);

  return (
    <Draggable
      handle="#credits-window-title-bar"
      nodeRef={nodeRef}
      positionOffset={{ x: "200%", y: "-300%" }}
    >
      <div
        ref={nodeRef}
        className="window absolute rover-window"
        style={{ width: "400px" }}
      >
        <div className="title-bar" id="credits-window-title-bar">
          <div className="title-bar-text"></div>
          <div className="title-bar-controls">
            <button aria-label="Help" />
          </div>
        </div>

        <div className="justify-normal bg-black">
          <div className="flex items-center">
            <video autoPlay loop muted playsInline width="128" height="128">
              <source src={RoverWaiting} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div>
              <p className="text-white"> ¿Estás seguro que estás bien?</p>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default RoverWindow;
