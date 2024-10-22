// Use this file as template to create new window components :)

import React, { useState } from "react";
import Draggable from "react-draggable";

import CriticalIcon from "../assets/critical.png";

function PermissionDeniedWindow({ permissionDeniedVisibility }) {
  const nodeRef = React.useRef(null);
  const { isPermissionDeniedVisible, setPerimissionDenied } = permissionDeniedVisibility;

  return (
    <Draggable
      handle="#permission-denied-window-title-bar"
      nodeRef={nodeRef}
      defaultPosition={{ x: 400, y: 250 }}
      position={null}
    >
      <div ref={nodeRef} className="window" style={{ width: "400px" }}>
        <div className="title-bar" id="permission-denied-window-title-bar">
          <div className="title-bar-text">Sin permisos suficientes</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={() => setPerimissionDenied(false)} />
          </div>
        </div>

        <div className="window-body flex-col justify-start">
          <div className="place-content-start flex mt-1 items-center">
            <img src={CriticalIcon.src} className="pixelated size-fit" />
            <p className="ml-2">
              NT_AUTHORITY ha denegado el acceso al recurso que ha solicitado. Por favor envíe una solicitud formal a la
              entidad en la jerarquía superior a su área.
            </p>
          </div>

          <div className="mt-3">
            <button onClick={() => setPerimissionDenied(false)}>Aceptar</button>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default PermissionDeniedWindow;
