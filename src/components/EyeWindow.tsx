import React, { useState } from "react";
import Draggable from "react-draggable";

import EyeAsset from "../assets/eye.mp4";

function EyeWindow({ eyeWindowVisibility }) {
  const nodeRef = React.useRef(null);

  const { isEyeWindowVisible, setEyeWindowVisible } = eyeWindowVisibility;

  return (
    <Draggable
      handle="#credits-window-title-bar"
      nodeRef={nodeRef}
      defaultPosition={{ x: 90, y: -300 }}
      position={null}
    >
      <div ref={nodeRef} className="window absolute" style={{ width: "128px" }}>
        <div className="title-bar" id="credits-window-title-bar">
          <div className="title-bar-text"></div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={() => setEyeWindowVisible(false)} />
          </div>
        </div>

        <div className="flex items-center bg-black p-4">
          <div className="">
            <video autoPlay loop muted playsInline width="128" height="128">
              <source src={EyeAsset} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default EyeWindow;
