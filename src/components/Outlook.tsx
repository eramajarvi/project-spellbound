import React, { useState } from "react";
import Draggable from "react-draggable";

import { RemoteFolderListItem } from "./emails/RemoteFolderListItem";
import { EmailsListItem } from "./emails/EmailsListItem";

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
import RemoteFolder from "../assets/remotefolder.png";

import Email01 from "./emails/Email-01";
import PermissionDeniedWindow from "./PermissionDenied";

function OutlookWindow({ OutlookAnswerWindowVisibility, warningWindowVisibility, permissionDeniedVisibility }) {
  const nodeRef = React.useRef(null);

  const { isOutlookAnswerVisible, setOutlookAnswerVisible } = OutlookAnswerWindowVisibility;
  const { isWarningWindowVisible, setWarningWindowVisible } = warningWindowVisibility;
  const { isPermissionDeniedVisible, setPerimissionDenied } = permissionDeniedVisibility;

  // Dictionary: Remote folder items elements
  const RemoteFolderItems = [
    { imgSrc: RemoteFolder.src, text: "7b95461b" },
    { imgSrc: RemoteFolder.src, text: "5978acf6" },
    { imgSrc: RemoteFolder.src, text: "3ea17849" },
    { imgSrc: RemoteFolder.src, text: "9f7a5295" },
    { imgSrc: RemoteFolder.src, text: "c0518067" },
    { imgSrc: RemoteFolder.src, text: "7ac5017a" },
    { imgSrc: RemoteFolder.src, text: "b83aeedb" },
    { imgSrc: RemoteFolder.src, text: "2187c0a6" },
    { imgSrc: RemoteFolder.src, text: "7e73958c" },
    { imgSrc: RemoteFolder.src, text: "203fe143" },
    { imgSrc: RemoteFolder.src, text: "bbfaf90e" },
    { imgSrc: RemoteFolder.src, text: "7b95461b" },
    { imgSrc: RemoteFolder.src, text: "ab402dbb" },
    { imgSrc: RemoteFolder.src, text: "9268b815" },
    { imgSrc: RemoteFolder.src, text: "3ccac8e4" },
    { imgSrc: RemoteFolder.src, text: "43f3705a" },
  ];

  const EmailsItems = [
    {
      contactSrc: PeopleIcon.src,
      headerText: "Estamos preocupados por ti, tu madre no hace sino llorar...",
      previewText: "Por favor contéstanos el teléfono.",
    },
    {
      contactSrc: PeopleIcon.src,
      headerText: "naranja araña administrador dictadura entidad tubería",
      previewText: "llamé a un taxista no a un taxidermista; me dijo que tal..",
    },
    {
      contactSrc: PeopleIcon.src,
      headerText: "Vomistar te envía la factura de tu servicio",
      previewText: "Estimado cliente, adjunto encontrará la factura para este...",
    },
    {
      contactSrc: PeopleIcon.src,
      headerText: "There were a segmentation fault caused by your last commit",
      previewText: "Please fix this disaster, we're counting on you to get the new...",
    },
    {
      contactSrc: PeopleIcon.src,
      headerText: "¿Te acuerdas de mi? Ya ha pasado mucho tiempo",
      previewText: "No se cómo he podido extrañarte tanto, así que te envío este...",
    },
    {
      contactSrc: PeopleIcon.src,
      headerText: "Reenvía este email a 256 personas diferentes o ya verás",
      previewText: "Haz caído en la maldición del príncipe nigeriano, ahora debes...",
    },
    {
      contactSrc: PeopleIcon.src,
      headerText: "Llamé a un taxista no a un taxidermista",
      previewText: "Esta es la quinta vez que presento una queja formal ante ustedes...",
    },
    {
      contactSrc: PeopleIcon.src,
      headerText: "I'm machine, I never sleep. Computerised, voice synthesised",
      previewText: "In a world of machines, what can I do but to serve? Use me, I'm cheap to rent...",
    },
  ];

  return (
    <Draggable handle="#outlook-window-title-bar" nodeRef={nodeRef} defaultPosition={{ x: 260, y: 50 }} position={null}>
      <div ref={nodeRef} className="window absolute" style={{ width: "870px", height: "700px" }}>
        <div className="title-bar" id="outlook-window-title-bar">
          <div className="title-bar-text flex items-center">
            <img src={OutlookIcon.src} className="w-4" />
            <p>Outlook Express - Bandeja de entrada</p>
          </div>
          <div className="title-bar-controls">
            <button aria-label="Help" />
            <button aria-label="Close" onClick={() => setWarningWindowVisible(true)} />
          </div>
        </div>

        {/* Contenedor de navegación */}
        <div className="window-body flex justify-normal">
          <div className="flex-col">
            {/* Local folders */}
            <div className="w-52">
              <ul className="tree-view">
                <li>
                  <div className="flex items-center hover:bg-[#3d64bd] hover:text-white hover:cursor-not-allowed">
                    <img className="pixelated" src={LocalFoldersIcon.src} />
                    <p className="font-extrabold ml-2">Carpetas locales</p>
                  </div>
                  <ul>
                    <li>
                      <div className="flex items-center bg-[#3d64bd] text-white">
                        <img className="pixelated w-6" src={InboxIcon.src} />
                        <p className="ml-1">Bandeja de entrada</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center hover:bg-[#3d64bd] hover:text-white hover:cursor-not-allowed">
                        <img className="pixelated w-6" src={ContactsIcon.src} />
                        <p className="ml-1">Libreta de contactos</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center hover:bg-[#3d64bd] hover:text-white hover:cursor-not-allowed">
                        <img className="pixelated w-6" src={DraftsIcon.src} />
                        <p className="ml-1">Borradores</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center hover:bg-[#3d64bd] hover:text-white hover:cursor-not-allowed">
                        <img className="pixelated w-6" src={DeletedIcon.src} />
                        <p className="ml-1">Eliminados</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center hover:bg-[#3d64bd] hover:text-white hover:cursor-not-allowed">
                        <img className="pixelated w-6" src={OutboxIcon.src} />
                        <p className="ml-1">Bandeja de salida</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center hover:bg-[#3d64bd] hover:text-white hover:cursor-not-allowed">
                        <img className="pixelated w-6" src={SentIcon.src} />
                        <p className="ml-1">Enviados</p>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Remote folders */}
            <div className="w-52 mt-4 overflow-y-auto h-[400px]">
              <ul className="tree-view">
                <li>
                  <div className="flex items-center hover:bg-[#3d64bd] hover:text-white hover:cursor-not-allowed">
                    <img className="pixelated" src={LocalFoldersIcon.src} />
                    <p className="font-extrabold ml-2">Carpetas locales</p>
                  </div>

                  <ul>
                    {RemoteFolderItems.map((item, index) => (
                      <RemoteFolderListItem
                        key={index}
                        imgSrc={item.imgSrc}
                        text={item.text}
                        onClick={() => setPerimissionDenied(true)}
                      />
                    ))}
                  </ul>
                </li>
              </ul>
            </div>

            {/* Outlook Branding */}
            <div className="w-52 mt-4 flex items-center font-semibold">
              <div className="w-6 mr-1">
                <img className="pixelated" src={OutlookIcon.src} />
              </div>
              <p>Outlook Express 6</p>
            </div>
          </div>

          {/* Contenedor de emails */}
          <div className="w-72 ml-2 overflow-y-auto h-[650px]">
            <ul className="tree-view">
              {/* Email 1 */}
              <li className="w-60 flex items-center bg-[#3d64bd] text-white p-1.5">
                <div className="w-8">
                  <img className="pixelated" src={PeopleIcon.src} />
                </div>
                <div className="ml-3">
                  <p className="leading-4 font-semibold">[URGENTE] Avistamientos detectados cerca de su área</p>
                  <p className="leading-4">Usted se encuentra en peligro, por favor revise este email para...</p>
                </div>
              </li>

              {EmailsItems.map((item, index) => (
                <EmailsListItem
                  key={index}
                  contactSrc={item.contactSrc}
                  headerText={item.headerText}
                  previewText={item.previewText}
                  onClick={() => setPerimissionDenied(true)}
                />
              ))}
            </ul>
          </div>

          <div className="w-[400px] ml-2">
            <div className="h-10 flex items-center justify-center  mb-2">
              <button className="flex items-center mx-0.5" onClick={() => setOutlookAnswerVisible(true)}>
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
