import React, { useState } from "react";
import OutlookWindow from "./Outlook";
import OutlookAnswerWindow from "./OutlookAnswer";
import RoverWindow from "./RoverWindow";
import WarningWindow from "./WarningWindow";
import EyeWindow from "./EyeWindow";
import PermissionDeniedWindow from "./PermissionDenied";
import ShaderWrapper from "./ShaderWrapper";

export default function Desktop() {
  const [isOutlookAnswerVisible, setOutlookAnswerVisible] = React.useState(false);
  const OutlookAnswerWindowVisibility = {
    isOutlookAnswerVisible,
    setOutlookAnswerVisible,
  };

  const [isRoverWindowVisible, setRoverWindowVisible] = React.useState(false);
  const RoverWindowVisibility = { isRoverWindowVisible, setRoverWindowVisible };
  const [roverStartSignal, setRoverStartSignal] = React.useState(false);
  const RoverStart = { roverStartSignal, setRoverStartSignal };
  const [roverStopSignal, setRoverStopSignal] = React.useState(false);
  const RoverStop = { roverStopSignal, setRoverStopSignal };

  const [isEyeWindowVisible, setEyeWindowVisible] = React.useState(false);
  const eyeWindowVisibility = { isEyeWindowVisible, setEyeWindowVisible };

  const [isBlissBgVisible, setBlissBgVisible] = React.useState(true);
  const blissBgVisibility = { isBlissBgVisible, setBlissBgVisible };

  const [isWarningWindowVisible, setWarningWindowVisible] = React.useState(false);
  const warningWindowVisibility = {
    isWarningWindowVisible,
    setWarningWindowVisible,
  };

  const [isShaderVisible, setIsShaderVisible] = React.useState(false);
  const shaderVisibility = { isShaderVisible, setIsShaderVisible };

  const [isPermissionDeniedVisible, setPerimissionDenied] = React.useState(false);
  const permissionDeniedVisibility = { isPermissionDeniedVisible, setPerimissionDenied };

  return (
    <>
      <div className="crt">
        {/* Background Shader Container */}
        <div className="size-full absolute" id="shadderContainer">
          {isShaderVisible ? <ShaderWrapper shaderVisibility={shaderVisibility} /> : null}
        </div>
      </div>

      {isBlissBgVisible ? (
        <div className="absolute h-full w-full bg-[url('src/assets/Bliss.jpg')] bg-no-repeat bg-cover" />
      ) : null}

      <OutlookWindow
        OutlookAnswerWindowVisibility={OutlookAnswerWindowVisibility}
        warningWindowVisibility={warningWindowVisibility}
        permissionDeniedVisibility={permissionDeniedVisibility}
      />

      {isPermissionDeniedVisible ? (
        <PermissionDeniedWindow permissionDeniedVisibility={permissionDeniedVisibility} />
      ) : null}

      {isOutlookAnswerVisible ? (
        <OutlookAnswerWindow
          OutlookAnswerWindowVisibility={OutlookAnswerWindowVisibility}
          RoverWindowVisibility={RoverWindowVisibility}
          warningWindowVisibility={warningWindowVisibility}
          RoverStart={RoverStart}
          RoverStop={RoverStop}
          eyeWindowVisibility={eyeWindowVisibility}
          shaderVisibility={shaderVisibility}
          blissBgVisibility={blissBgVisibility}
        />
      ) : null}

      {isRoverWindowVisible ? <RoverWindow RoverStart={RoverStart} RoverStop={RoverStop} /> : null}

      {isWarningWindowVisible ? <WarningWindow warningWindowVisibility={warningWindowVisibility} /> : null}

      {isEyeWindowVisible ? <EyeWindow eyeWindowVisibility={eyeWindowVisibility} /> : null}
    </>
  );
}
