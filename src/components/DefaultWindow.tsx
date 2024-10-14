// Use this file as template to create new window components :)

import React, { useState } from "react";
import Draggable from "react-draggable";

function DefaultWindow() {
  const nodeRef = React.useRef(null);

  return (
    <Draggable
      handle="#credits-window-title-bar"
      nodeRef={nodeRef}
      positionOffset={{ x: "0%", y: "20%" }}
    >
      <div ref={nodeRef} className="window" style={{ width: "400px" }}>
        <div className="title-bar" id="credits-window-title-bar">
          <div className="title-bar-text">Hola mundo</div>
          <div className="title-bar-controls">
            <button aria-label="Help" />
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
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

export default DefaultWindow;
