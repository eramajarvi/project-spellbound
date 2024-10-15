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

function OutlookAnswerWindow({ OutlookAnswerWindowVisibility }) {
  const nodeRef = React.useRef(null);

  const { isOutlookAnswerVisible, setOutlookAnswerVisible } =
    OutlookAnswerWindowVisibility;

  return (
    <Draggable
      handle="#outlook-window-title-bar"
      nodeRef={nodeRef}
      positionOffset={{ x: "30%", y: "-95%" }}
    >
      <div
        ref={nodeRef}
        className="window absolute"
        style={{ width: "850px", height: "700px" }}
      >
        <div className="title-bar" id="outlook-window-title-bar">
          <div className="title-bar-text flex items-center">
            <img src={OutlookIcon.src} />
            <p>Outlook Express - Mensaje Nuevo</p>
          </div>
          <div className="title-bar-controls">
            <button aria-label="Help" />

            <button
              aria-label="Close"
              onClick={() => setOutlookAnswerVisible(false)}
            />
          </div>
        </div>

        <div className="window-body flex justify-normal"></div>
      </div>
    </Draggable>
  );
}

export default OutlookAnswerWindow;
