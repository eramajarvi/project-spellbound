import "../styles/fileExplorer.css";

import soporImage from "../assets/sopor.webp";

import React, { useEffect } from "react";

function Sopor({}) {
  return (
    <>
      <div className="flex relative fileExplorer">
        <img src={soporImage.src} />
        <a className="absolute fileLink left-[300px] top-[100px] text-white text-2xl">
          entrar al sistema
        </a>
      </div>
    </>
  );
}

export default Sopor;
