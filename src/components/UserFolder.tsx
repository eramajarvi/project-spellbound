import "../styles/fileExplorer.css";

import folderIcon from "../assets/folder.png";
import textIcon from "../assets/text.png";

import React, { useEffect } from "react";

function UserFolder({
  userFolderVisibility,
  caseMainVisibility,
  caseTwoVisibility,
  caseThreeVisibility,
  creditsVisibility,
}) {
  const { isUserFolderVisible, setUserFolderVisible } = userFolderVisibility;
  const { isCaseMainVisible, setCaseMainVisible } = caseMainVisibility;
  const { isCaseTwoVisible, setCaseTwoVisible } = caseTwoVisibility;
  const { isCaseThreeVisible, setCaseThreeVisible } = caseThreeVisibility;
  const { isCreditsVisible, setCreditsVisible } = creditsVisibility;

  return (
    <>
      <div className="fileExplorer">
        <h1>Índice de C:\Documents and Settings\UserP2422J</h1>

        <div>
          <table>
            <thead>
              <tr>
                <th className="">Nombre</th>
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
                      setUserFolderVisible(false, setCaseMainVisible(true));
                    }}
                  >
                    <img src={folderIcon.src} alt="Icon of generic image" />
                    <p>caseA10R24</p>
                  </a>
                </td>
                <td className="detailsColumn">500 kB</td>
                <td className="detailsColumn">14/10/2024, 21:45</td>
              </tr>

              <tr>
                <td data-value="">
                  <a
                    className="fileLink flex items-center"
                    onClick={() => {
                      setUserFolderVisible(false), setCaseTwoVisible(true);
                    }}
                  >
                    <img src={folderIcon.src} alt="Icon of generic image" />
                    <p>caseJNM155U</p>
                  </a>
                </td>
                <td className="detailsColumn">2.4 GB</td>
                <td className="detailsColumn">07/11/2023, 23:14</td>
              </tr>

              <tr>
                <td data-value="">
                  <a
                    className="fileLink flex items-center"
                    onClick={() => {
                      setUserFolderVisible(false), setCaseThreeVisible(true);
                    }}
                  >
                    <img src={folderIcon.src} alt="Icon of generic image" />
                    <p>case26f26b7d-9097-4d84-8e7f-360390007273</p>
                  </a>
                </td>
                <td className="detailsColumn">8.4 MB</td>
                <td className="detailsColumn">31/03/2001, 14:21</td>
              </tr>

              <tr>
                <td data-value="">
                  <a
                    className="fileLink flex items-center"
                    onClick={() => {
                      setUserFolderVisible(false), setCreditsVisible(true);
                    }}
                  >
                    <img src={textIcon.src} alt="Icon of generic image" />
                    <p>créditos.txt</p>
                  </a>
                </td>
                <td className="detailsColumn">8.4 kB</td>
                <td className="detailsColumn">31/03/2001, 14:21</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserFolder;
