import "../styles/fileExplorer.css";

import upIcon from "../assets/up.png";
import imageIcon from "../assets/image.png";

import React, { useEffect } from "react";

function CaseMain({
  caseMainVisibility,
  userFolderVisibility,
  soporVisibility,
}) {
  const { isCaseMainVisible, setCaseMainVisible } = caseMainVisibility;
  const { isUserFolderVisible, setUserFolderVisible } = userFolderVisibility;
  const { isSoporVisible, setSoporVisible } = soporVisibility;

  return (
    <>
      <div className="fileExplorer">
        <h1>Índice de C:\Documents and Settings\UserP2422J\caseA10R24</h1>

        <div>
          <div>
            <a
              className="fileLink flex items-center"
              onClick={() => {
                setCaseMainVisible(false), setUserFolderVisible(true);
              }}
            >
              <img src={upIcon.src} alt="Go up" />
              <p>[directorio padre]</p>
            </a>
          </div>

          <table className="fileExplorer">
            <thead>
              <tr>
                <th className="fileExplorer">Nombre</th>
                <th className="detailsColumn">Tamaño</th>
                <th className="detailsColumn">Fecha de modificación</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td data-value="">
                  <a
                    className="fileLink flex items-center"
                    onClick={() => {
                      setCaseMainVisible(false);
                      setSoporVisible(true);
                    }}
                  >
                    <img src={imageIcon.src} alt="Icon of generic image" />
                    <p>ábreme.jpg</p>
                  </a>
                </td>
                <td className="detailsColumn">500 kB</td>
                <td className="detailsColumn">14/03/2024, 21:45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CaseMain;
