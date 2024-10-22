import React, { useState } from "react";
import Draggable from "react-draggable";

import warningIcon from "../assets/alert.png";

function WarningWindow({ warningWindowVisibility }) {
  const nodeRef = React.useRef(null);
  const { isWarningWindowVisible, setWarningWindowVisible } = warningWindowVisibility;

  return (
    <div className="">
      <Draggable
        handle="#title-bar-warning-window"
        nodeRef={nodeRef}
        defaultPosition={{ x: 500, y: 250 }}
        position={null}
      >
        <div ref={nodeRef} className="window absolute" style={{ width: "300px" }}>
          <div className="title-bar" id="title-bar-warning-window">
            <div className="title-bar-text">¿Te quieres ir?</div>

            <div className="title-bar-controls">
              <button aria-label="Close" onClick={() => setWarningWindowVisible(false)}></button>
            </div>
          </div>

          <div className="window-body flex justify-start">
            <div className="place-content-start mt-1">
              <img src={warningIcon.src} className="pixelated" />
            </div>
            <div className="ml-3">
              <p>No hay salida. No. No. No. No. No. No hay salida.</p>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default WarningWindow;
