import React, { useState } from "react";
import OutlookWindow from "./Outlook";
import OutlookAnswerWindow from "./OutlookAnswer";
import RoverWindow from "./RoverWindow";

export default function Desktop() {
  const [isOutlookAnswerVisible, setOutlookAnswerVisible] =
    React.useState(false);

  const OutlookAnswerWindowVisibility = {
    isOutlookAnswerVisible,
    setOutlookAnswerVisible,
  };

  const [isRoverWindowVisible, setRoverWindowVisible] = React.useState(false);

  const RoverWindowVisibility = { isRoverWindowVisible, setRoverWindowVisible };

  return (
    <>
      <div className="crt"></div>
      <div className="absolute h-full w-full bg-[url('src/assets/Bliss.jpg')] bg-no-repeat bg-cover"></div>
      <OutlookWindow
        OutlookAnswerWindowVisibility={OutlookAnswerWindowVisibility}
      />

      {isOutlookAnswerVisible ? (
        <OutlookAnswerWindow
          OutlookAnswerWindowVisibility={OutlookAnswerWindowVisibility}
          RoverWindowVisibility={RoverWindowVisibility}
        />
      ) : null}

      {isRoverWindowVisible ? <RoverWindow /> : null}
    </>
  );
}
