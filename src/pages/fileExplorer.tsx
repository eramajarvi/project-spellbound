import "../styles/fileExplorer.css";

import UserFolder from "../components/UserFolder";
import CaseMain from "../components/CaseMain";
import CaseTwo from "../components/CaseTwo";
import CaseThree from "../components/CaseThree";
import Creditos from "../components/Creditos";

import Desktop from "../components/Desktop";

import SoporPicture from "../components/Sopor";

import ShaderWrapper from "../components/ShaderWrapper";

import React from "react";

export default function FileExplorer() {
  const [isUserFolderVisible, setUserFolderVisible] = React.useState(false);
  const userFolderVisibility = { isUserFolderVisible, setUserFolderVisible };

  const [isCaseMainVisible, setCaseMainVisible] = React.useState(true);
  const caseMainVisibility = { isCaseMainVisible, setCaseMainVisible };

  const [isCaseTwoVisible, setCaseTwoVisible] = React.useState(false);
  const caseTwoVisibility = { isCaseTwoVisible, setCaseTwoVisible };

  const [isCaseThreeVisible, setCaseThreeVisible] = React.useState(false);
  const caseThreeVisibility = { isCaseThreeVisible, setCaseThreeVisible };

  const [isCreditsVisible, setCreditsVisible] = React.useState(false);
  const creditsVisibility = { isCreditsVisible, setCreditsVisible };

  const [isSoporVisible, setSoporVisible] = React.useState(false);
  const soporVisibility = { isSoporVisible, setSoporVisible };

  const [isDesktopVisible, setDesktopVisible] = React.useState(false);
  const desktopVisibility = { isDesktopVisible, setDesktopVisible };

  return (
    <>
      <div>
        {isUserFolderVisible ? (
          <UserFolder
            userFolderVisibility={userFolderVisibility}
            caseMainVisibility={caseMainVisibility}
            caseTwoVisibility={caseTwoVisibility}
            caseThreeVisibility={caseThreeVisibility}
            creditsVisibility={creditsVisibility}
          />
        ) : null}
      </div>

      <div>
        {isCaseMainVisible ? (
          <CaseMain
            caseMainVisibility={caseMainVisibility}
            userFolderVisibility={userFolderVisibility}
            soporVisibility={soporVisibility}
          />
        ) : null}
      </div>

      <div>
        {isCaseTwoVisible ? (
          <CaseTwo
            caseTwoVisibility={caseTwoVisibility}
            userFolderVisibility={userFolderVisibility}
            soporVisibility={soporVisibility}
          />
        ) : null}
      </div>

      <div>
        {isCaseThreeVisible ? (
          <CaseThree
            caseThreeVisibility={caseThreeVisibility}
            userFolderVisibility={userFolderVisibility}
            soporVisibility={soporVisibility}
          />
        ) : null}
      </div>

      <div>
        {isCreditsVisible ? (
          <Creditos creditsVisibility={creditsVisibility} userFolderVisibility={userFolderVisibility} />
        ) : null}
      </div>

      <div>{isDesktopVisible ? <Desktop /> : null}</div>

      <div>
        {isSoporVisible ? (
          <SoporPicture soporVisibility={soporVisibility} desktopVisibility={desktopVisibility} />
        ) : null}
      </div>
    </>
  );
}
