import React, { useState } from "react";
import OutlookWindow from "./Outlook";
import OutlookAnswerWindow from "./OutlookAnswer";

export default function Desktop() {
  const [isOutlookAnswerVisible, setOutlookAnswerVisible] =
    React.useState(false);

  const OutlookAnswerWindowVisibility = {
    isOutlookAnswerVisible,
    setOutlookAnswerVisible,
  };

  return (
    <>
      <div className="crt"></div>
      <div className="absolute h-full w-full bg-[url('src/assets/Bliss.jpg')] bg-no-repeat bg-cover"></div>
      <OutlookWindow
        OutlookAnswerWindowVisibility={OutlookAnswerWindowVisibility}
      />

      {isOutlookAnswerVisible ? <OutlookAnswerWindow /> : null}
    </>
  );
}
