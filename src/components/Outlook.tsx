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
import AnswerIcon from "../assets/answer.ico";
import PrintIcon from "../assets/print.ico";
import DeleteIcon from "../assets/delete.ico";

import Email01 from "./emails/Email-01";

function OutlookWindow({ OutlookAnswerWindowVisibility }) {
  const nodeRef = React.useRef(null);

  const { isOutlookAnswerVisible, setOutlookAnswerVisible } =
    OutlookAnswerWindowVisibility;

  return (
    <Draggable
      handle="#outlook-window-title-bar"
      nodeRef={nodeRef}
      positionOffset={{ x: "40%", y: "3%" }}
    >
      <div
        ref={nodeRef}
        className="window"
        style={{ width: "850px", height: "700px" }}
      >
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
                  <p className="font-extrabold ml-2">Carpetas locales</p>
                </div>
                <ul>
                  <li>
                    <a className="flex items-center font-bold" href="">
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
          <div className="w-64 ml-2 overflow-y-auto">
            <ul className="tree-view">
              {/* Email 1 */}
              <li className="w-60 flex items-center bg-[#3d64bd] text-white p-1.5">
                <div className="w-8">
                  <img className="pixelated" src={PeopleIcon.src} />
                </div>
                <div className="ml-3">
                  <p className="leading-4 font-semibold">
                    [URGENTE] Avistamientos detectados cerca de su área
                  </p>
                  <p className="leading-4">
                    Usted se encuentra en peligro, por favor revise este email
                    para...
                  </p>
                </div>
              </li>

              {/* Email 2 */}
              <li className="w-60 mt-2 flex items-center hover:bg-[#3d64bd] hover:text-white p-1.5">
                <div className="">
                  <img className="pixelated" src={PeopleIcon.src} />
                </div>
                <div className="ml-3 w-52">
                  <p className="leading-4 font-semibold">
                    Estamos preocupados por ti, tu madre no hace sino llorar...
                  </p>
                  <p className="leading-4">
                    Por favor contéstanos el teléfono.
                  </p>
                </div>
              </li>

              {/* Email 3 */}
              <li className="w-60 mt-2 flex items-center hover:bg-[#3d64bd] hover:text-white p-1.5">
                <div className="">
                  <img className="pixelated" src={PeopleIcon.src} />
                </div>
                <div className="ml-3 w-52">
                  <p className="leading-4 font-semibold">
                    naranja araña administrador dictadura entidad tubería
                  </p>
                  <p className="leading-4">
                    llamé a un taxista no a un taxidermista; me dijo que tal...
                  </p>
                </div>
              </li>

              {/* Email 4 */}
              <li className="w-60 mt-2 flex items-center hover:bg-[#3d64bd] hover:text-white p-1.5">
                <div className="">
                  <img className="pixelated" src={PeopleIcon.src} />
                </div>
                <div className="ml-3 w-52">
                  <p className="leading-4 font-semibold">
                    Vomistar te envía la factura de tu servicio
                  </p>
                  <p className="leading-4">
                    Estimado cliente, adjunto encontrará la factura para este...
                  </p>
                </div>
              </li>

              {/* Email 5 */}
              <li className="w-60 mt-2 flex items-center hover:bg-[#3d64bd] hover:text-white p-1.5">
                <div className="">
                  <img className="pixelated" src={PeopleIcon.src} />
                </div>
                <div className="ml-3 w-52">
                  <p className="leading-4 font-semibold">
                    There were a segmentation fault caused by your last commit
                  </p>
                  <p className="leading-4">
                    Please fix this disaster, we're counting on you to get the
                    new...
                  </p>
                </div>
              </li>

              {/* Email 6 */}
              <li className="w-60 mt-2 flex items-center hover:bg-[#3d64bd] hover:text-white p-1.5">
                <div className="">
                  <img className="pixelated" src={PeopleIcon.src} />
                </div>
                <div className="ml-3 w-52">
                  <p className="leading-4 font-semibold">
                    ¿Te acuerdas de mi? Ya ha pasado mucho tiempo
                  </p>
                  <p className="leading-4">
                    No se cómo he podido extrañarte tanto, así que te envío
                    este...
                  </p>
                </div>
              </li>

              {/* Email 7 */}
              <li className="w-60 mt-2 flex items-center hover:bg-[#3d64bd] hover:text-white p-1.5">
                <div className="">
                  <img className="pixelated" src={PeopleIcon.src} />
                </div>
                <div className="ml-3 w-52">
                  <p className="leading-4 font-semibold">
                    Reenvía este email a 256 personas diferentes o ya verás
                  </p>
                  <p className="leading-4">
                    Haz caído en la maldición del príncipe nigeriano, ahora
                    debes...
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="w-[400px] ml-2">
            <div className="h-10 flex items-center justify-center border-2 border-gray-400 rounded-md mb-2">
              <button
                className="flex items-center mx-0.5"
                onClick={() => setOutlookAnswerVisible(true)}
              >
                <img src={AnswerIcon} className="size-6 -ml-2" />
                <p>Responder</p>
              </button>

              <button className="flex items-center mx-1 inactive-text">
                <img src={DeleteIcon} className="size-6 -ml-2 grayscale" />
                <p>Eliminar</p>
              </button>

              <button className="flex items-center mx-1 inactive-text">
                <img src={AnswerIcon} className="size-6 -ml-2 grayscale" />
                <p>Archivar</p>
              </button>

              <button className="flex items-center mx-1 inactive-text">
                <img src={PrintIcon} className="size-6 -ml-2 grayscale" />
                <p>Imprimir</p>
              </button>
            </div>

            <Email01 />
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default OutlookWindow;
