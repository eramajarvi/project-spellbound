import "xp.css/dist/XP.css";

import BlissWallpaper from "../assets/Bliss.jpg";

import React, { useState } from "react";
import DefaultWindow from "./DefaultWindow";

export default function Desktop() {
  return (
    <>
      <div className="crt"></div>
      <div className="absolute h-full w-full bg-[url('src/assets/Bliss.jpg')] bg-no-repeat bg-cover"></div>
      <DefaultWindow />
    </>
  );
}
