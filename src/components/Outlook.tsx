import React, { useState } from "react";
import Draggable from "react-draggable";

import OutlookIcon from "../assets/outlook.png";
import LocalFoldersIcon from "../assets/localfolders.png";
import InboxIcon from "../assets/inbox.png";
import ContactsIcon from "../assets/contacts.png";
import DraftsIcon from "../assets/drafts.png";
import OutboxIcon from "../assets/outbox.png";
import DeletedIcon from "../assets/deleted.png";
import SentIcon from "../assets/sent.png";
import PeopleIcon from "../assets/useremail.png";

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
          <div className="w-48">
            <ul className="tree-view">
              <li>
                <div className="flex items-center">
                  <img className="pixelated" src={LocalFoldersIcon.src} />
                  <p className="font-bold ml-2">Carpetas locales</p>
                </div>
                <ul>
                  <li>
                    <a className="flex items-center" href="">
                      <img className="pixelated" src={InboxIcon.src} />
                      <p>Bandeja de entrada</p>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <img className="pixelated" src={ContactsIcon.src} />
                      <p className="ml-1">Libreta de contactos</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <img className="pixelated" src={DraftsIcon.src} />
                      <p className="ml-1">Borradores</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <img className="pixelated" src={DeletedIcon.src} />
                      <p className="ml-1">Eliminados</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <img className="pixelated" src={OutboxIcon.src} />
                      <p className="ml-1">Bandeja de salida</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <img className="pixelated" src={SentIcon.src} />
                      <p className="ml-1">Enviados</p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Contenedor de emails */}
          <div className="w-60 ml-2 border-blue-400 border-4">
            {/* Email 1 */}
            <div className="w-60 flex items-center">
              <div className="w-8">
                <img className="pixelated" src={PeopleIcon.src} />
              </div>
              <div className="ml-1">
                <p className="leading-3 font-semibold">
                  [URGENTE] Nuevos avistamientos detectados cerca de tu área
                </p>
                <p className="leading-3">
                  Usted se encuentra en peligro, por favor revise este email
                  para...
                </p>
              </div>
            </div>

            {/* Email 2 */}
            <div className="w-60 mt-2 flex items-center">
              <div className="">
                <img className="pixelated" src={PeopleIcon.src} />
              </div>
              <div className="ml-1 w-52">
                <p className="leading-3 font-semibold">
                  Estamos preocupados por ti, tu madre no hace sino llorar...
                </p>
                <p className="leading-3">Por favor contéstanos el teléfono.</p>
              </div>
            </div>

            {/* Email 3 */}
            <div className="w-60 mt-2 flex items-center">
              <div className="">
                <img className="pixelated" src={PeopleIcon.src} />
              </div>
              <div className="ml-1 w-52">
                <p className="leading-3 font-semibold">
                  naranja araña administrador dictadura entidad tubería
                </p>
                <p className="leading-3">
                  llamé a un taxista no a un taxidermista; me dijo que tal...
                </p>
              </div>
            </div>

            {/* Email 4 */}
            <div className="w-60 mt-2 flex items-center">
              <div className="">
                <img className="pixelated" src={PeopleIcon.src} />
              </div>
              <div className="ml-1 w-52">
                <p className="leading-3 font-semibold">
                  Vomistar te envía la factura de tu servicio
                </p>
                <p className="leading-3">
                  Estimado cliente, adjunto encontrará la factura para este...
                </p>
              </div>
            </div>

            {/* Email 5 */}
            <div className="w-60 mt-2 flex items-center">
              <div className="">
                <img className="pixelated" src={PeopleIcon.src} />
              </div>
              <div className="ml-1 w-52">
                <p className="leading-3 font-semibold">
                  There were a segmentation fault caused by your last commit
                </p>
                <p className="leading-3">
                  Please fix this disaster, we're counting on you to get the
                  new...
                </p>
              </div>
            </div>

            {/* Email 6 */}
            <div className="w-60 mt-2 flex items-center">
              <div className="">
                <img className="pixelated" src={PeopleIcon.src} />
              </div>
              <div className="ml-1 w-52">
                <p className="leading-3 font-semibold">
                  ¿Te acuerdas de mi? Ya ha pasado mucho tiempo
                </p>
                <p className="leading-3">
                  No se cómo he podido extrañarte tanto, así que te envío
                  este...
                </p>
              </div>
            </div>

            <div className="w-60 mt-2 flex items-center">
              <div className="">
                <img className="pixelated" src={PeopleIcon.src} />
              </div>
              <div className="ml-1 w-52">
                <p className="leading-3 font-semibold">
                  Reenvía este email a 256 personas diferentes o ya verás
                </p>
                <p className="leading-3">
                  Haz caído en la maldición del príncipe nigeriano, ahora
                  debes...
                </p>
              </div>
            </div>
          </div>

          <div className="w-[380px] ml-2 border-blue-400 border-4">
            Hola mundo
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default OutlookWindow;
