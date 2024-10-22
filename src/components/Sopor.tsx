import "../styles/fileExplorer.css";

import soporImage from "../assets/sopor.webp";
import OutlookIcon from "../assets/outlook.png";

import React, { useEffect } from "react";
import Draggable from "react-draggable";

function Sopor({ soporVisibility, desktopVisibility }) {
  const { isSoporVisible, setSoporVisible } = soporVisibility;
  const { isDesktopVisible, setDesktopVisible } = desktopVisibility;

  const nodeRef = React.useRef(null);

  return (
    <>
      <div ref={nodeRef} className="flex relative fileExplorer">
        <img src={soporImage.src} />
      </div>

      <Draggable
        nodeRef={nodeRef}
        handle="#new-email-window-title-bar"
        defaultPosition={{ x: 200, y: -450 }}
        position={null}
      >
        <div className="window absolute" style={{ width: "300px" }}>
          <div className="title-bar" id="new-email-window-title-bar">
            <div className="title-bar-text">Nueva notificación</div>
            <div className="title-bar-controls">
              <button aria-label="Help" />
              <button aria-label="Close" />
            </div>
          </div>

          <div className="window-body relative inline-flex flex-col">
            <div className="flex items-center p-1">
              <div className="">
                <img src={OutlookIcon.src} className="pixelated" />
              </div>

              <div className="ml-3 w-64">
                <p>Tiene un nuevo email en su bandeja de entrada. ¿Desea abrirlo ahora?</p>
              </div>
            </div>

            <div className="items-center p-2">
              <button
                className="m-2"
                onClick={() => {
                  setSoporVisible(false), setDesktopVisible(true);
                }}
              >
                Sí
              </button>
              <button
                onClick={() => {
                  setSoporVisible(false), setDesktopVisible(true);
                }}
              >
                Por supuesto
              </button>
            </div>
          </div>
        </div>
      </Draggable>
    </>
  );
}

export default Sopor;
