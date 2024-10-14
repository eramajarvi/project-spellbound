import "../styles/fileExplorer.css";

import soporImage from "../assets/sopor.webp";

import React, { useEffect } from "react";

function Sopor({ soporVisibility, desktopVisibility }) {
  const { isSoporVisible, setSoporVisible } = soporVisibility;
  const { isDesktopVisible, setDesktopVisible } = desktopVisibility;
  return (
    <>
      <div className="flex relative fileExplorer">
        <img src={soporImage.src} />
        <a
          className="absolute fileLink left-[300px] top-[100px] text-white text-2xl"
          onClick={() => {
            setSoporVisible(false), setDesktopVisible(true);
          }}
        >
          entrar al sistema
        </a>
      </div>
    </>
  );
}

export default Sopor;
