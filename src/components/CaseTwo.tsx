import "../styles/fileExplorer.css";

import upIcon from "../assets/up.png";
import imageIcon from "../assets/image.png";
import documentIcon from "../assets/document.png";
import IEICon from "../assets/internetexplorer.png";

import React, { useEffect } from "react";

function CaseTwo({ caseTwoVisibility, userFolderVisibility, soporVisibility, ReportOneVisibility }) {
  const { isCaseTwoVisible, setCaseTwoVisible } = caseTwoVisibility;
  const { isUserFolderVisible, setUserFolderVisible } = userFolderVisibility;
  const { isSoporVisible, setSoporVisible } = soporVisibility;
  const { isReportOneVisible, setReportOneVisible } = ReportOneVisibility;

  return (
    <>
      <div className="fileExplorer">
        <h1>Índice de C:\Documents and Settings\UserP2422J\caseJNM155U</h1>

        <div>
          <div className="">
            <a
              className="fileLink flex items-center"
              onClick={() => {
                setCaseTwoVisible(false), setUserFolderVisible(true);
              }}
            >
              <img src={upIcon.src} alt="Go up" />
              <p>[directorio padre]</p>
            </a>
          </div>

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
                      setCaseTwoVisible(false);
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

              <tr>
                <td data-value="">
                  <a
                    className="fileLink flex items-center"
                    onClick={() => (setCaseTwoVisible(false), setReportOneVisible(true))}
                  >
                    <img src={documentIcon.src} alt="Icon of generic document" className="w-6" />
                    <p>reporte de relación tiempo y conciencia.pdf</p>
                  </a>
                </td>
                <td className="detailsColumn">172 kB</td>
                <td className="detailsColumn">24/05/2016, 21:45</td>
              </tr>

              <tr>
                <td data-value="">
                  <a
                    className="fileLink flex items-center"
                    href="https://eramajarvi-project-overflow.vercel.app"
                    target="_blank"
                  >
                    <img src={IEICon.src} alt="Icon of generic document" className="w-6" />
                    <p>segmentation_fault.url</p>
                  </a>
                </td>
                <td className="detailsColumn">224 B</td>
                <td className="detailsColumn">03/08/2024, 21:45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CaseTwo;
