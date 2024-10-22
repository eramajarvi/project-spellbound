import "../styles/fileExplorer.css";

import upIcon from "../assets/up.png";
import doc01 from "../assets/doc-01.pdf";

function CaseTwoReportOne({ ReportOneVisibility, caseTwoVisibility }) {
  const { isReportOneVisible, setReportOneVisible } = ReportOneVisibility;
  const { isCaseTwoVisible, setCaseTwoVisible } = caseTwoVisibility;

  return (
    <>
      <div className="fileExplorer">
        <h1>Índice de C:\Documents and Settings\UserP2422J\caseJNM155U\reporte.pdf</h1>

        <div>
          <div className="mb-4">
            <a
              className="fileLink flex items-center"
              onClick={() => (setReportOneVisible(false), setCaseTwoVisible(true))}
            >
              <img src={upIcon.src} alt="Go up" />
              <p>[directorio padre]</p>
            </a>
          </div>

          <embed src={doc01} width={"100%"} height={"600px"} type="application/pdf" />
        </div>
      </div>
    </>
  );
}

export default CaseTwoReportOne;
