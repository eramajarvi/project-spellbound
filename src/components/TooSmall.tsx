import React, { useState } from "react";
import Draggable from "react-draggable";

import DriverIcon from "../assets/drivers.png";

function TooSmallWindow() {
  const nodeRef = React.useRef(null);

  return (
    <Draggable
      handle="#too-small-window-title-bar"
      nodeRef={nodeRef}
      defaultPosition={{ x: 50, y: 200 }}
      position={null}
    >
      <div ref={nodeRef} className="window" style={{ width: "400px" }}>
        <div className="title-bar" id="too-small-window-title-bar">
          <div className="title-bar-text">Error</div>
          <div className="title-bar-controls"></div>
        </div>

        <div className="window-body flex-col justify-start">
          <div className="place-content-start flex items-center">
            <img src={DriverIcon.src} className="mb-4 size-fit" />

            <p className="ml-2">
              El controlador de esta pantalla no es compatible. Instale los controladores de pantalla necesarios y
              vuelva a intentarlo
            </p>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default TooSmallWindow;
