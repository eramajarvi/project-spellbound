import React, { useState } from "react";
import OutlookWindow from "./Outlook";
import OutlookAnswerWindow from "./OutlookAnswer";
import RoverWindow from "./RoverWindow";
import WarningWindow from "./WarningWindow";

export default function Desktop() {
  const [isOutlookAnswerVisible, setOutlookAnswerVisible] =
    React.useState(false);
  const OutlookAnswerWindowVisibility = {
    isOutlookAnswerVisible,
    setOutlookAnswerVisible,
  };

  const [isRoverWindowVisible, setRoverWindowVisible] = React.useState(false);
  const RoverWindowVisibility = { isRoverWindowVisible, setRoverWindowVisible };
  const [roverStartSignal, setRoverStartSignal] = React.useState(false);
  const RoverStart = { roverStartSignal, setRoverStartSignal };

  const [isWarningWindowVisible, setWarningWindowVisible] =
    React.useState(false);
  const warningWindowVisibility = {
    isWarningWindowVisible,
    setWarningWindowVisible,
  };

  return (
    <>
      <div className="crt"></div>
      <div className="absolute h-full w-full bg-[url('src/assets/Bliss.jpg')] bg-no-repeat bg-cover"></div>
      <OutlookWindow
        OutlookAnswerWindowVisibility={OutlookAnswerWindowVisibility}
        warningWindowVisibility={warningWindowVisibility}
      />

      {isOutlookAnswerVisible ? (
        <OutlookAnswerWindow
          OutlookAnswerWindowVisibility={OutlookAnswerWindowVisibility}
          RoverWindowVisibility={RoverWindowVisibility}
          warningWindowVisibility={warningWindowVisibility}
          RoverStart={RoverStart}
        />
      ) : null}

      {isRoverWindowVisible ? <RoverWindow RoverStart={RoverStart} /> : null}

      {isWarningWindowVisible ? (
        <WarningWindow warningWindowVisibility={warningWindowVisibility} />
      ) : null}
    </>
  );
}
