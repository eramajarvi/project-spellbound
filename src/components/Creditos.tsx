import "../styles/fileExplorer.css";

import upIcon from "../assets/up.png";
import imageIcon from "../assets/image.png";

import React, { useEffect } from "react";

function Creditos({ creditsVisibility, userFolderVisibility }) {
  const { isCreditsVisible, setCreditsVisible } = creditsVisibility;
  const { isUserFolderVisible, setUserFolderVisible } = userFolderVisibility;

  return (
    <>
      <div className="fileExplorer">
        <h1>C:\Documents and Settings\UserP2422J\creditos.txt</h1>

        <div>
          <div className="">
            <a
              className="fileLink flex items-center"
              onClick={() => {
                setCreditsVisible(false), setUserFolderVisible(true);
              }}
            >
              <img src={upIcon.src} alt="Go up" />
              <p>[directorio padre]</p>
            </a>
          </div>
          <div>
            <p className="mt-2">
              Este proyecto se ha construído con herramientas de código abierto.
              Todos los créditos van para sus respectivos autores y sus
              licencias asignadas.{" "}
            </p>

            <p className="mb-2">
              <strong>James Perez</strong> <i>@eramajarvi</i> —–{" "}
              <a
                href="https://github.com/eramajarvi/project-spellbound"
                target="_blank"
              >
                {" "}
                Ver código fuente
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Creditos;
