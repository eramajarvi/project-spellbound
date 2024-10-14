import React, { useState } from "react";
import OutlookWindow from "./Outlook";

export default function Desktop() {
  return (
    <>
      <div className="crt"></div>
      <div className="absolute h-full w-full bg-[url('src/assets/Bliss.jpg')] bg-no-repeat bg-cover"></div>
      <OutlookWindow />
    </>
  );
}
