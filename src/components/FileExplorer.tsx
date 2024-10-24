import "../styles/fileExplorer.css";

import UserFolder from "./UserFolder";
import CaseMain from "./CaseMain";
import CaseTwo from "./CaseTwo";
import CaseThree from "./CaseThree";
import Creditos from "./Creditos";

import Desktop from "./Desktop";

import SoporPicture from "./Sopor";

import CaseTwoReportOne from "./CaseTwoReportOne";

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

  const [isReportOneVisible, setReportOneVisible] = React.useState(false);
  const ReportOneVisibility = { isReportOneVisible, setReportOneVisible };

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
            ReportOneVisibility={ReportOneVisibility}
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

      <div>
        {isReportOneVisible ? (
          <CaseTwoReportOne ReportOneVisibility={ReportOneVisibility} caseTwoVisibility={caseTwoVisibility} />
        ) : null}
      </div>
    </>
  );
}
