import React from "react";
import type { APIRoute } from "astro";
import { Cloudinary } from "@cloudinary/url-gen";
import { name } from "@cloudinary/url-gen/actions/namedTransformation";

import Draggable from "react-draggable";

import OutlookIcon from "../assets/outlook.png";
import AttachIcon from "../assets/attach.png";
import CutIcon from "../assets/cut.png";
import CopyIcon from "../assets/copy.png";
import PasteIcon from "../assets/paste.png";
import RoverWaiting from "../assets/rover-waiting.mp4";

function OutlookAnswerWindow({ OutlookAnswerWindowVisibility }) {
  const nodeRef = React.useRef(null);

  const { isOutlookAnswerVisible, setOutlookAnswerVisible } =
    OutlookAnswerWindowVisibility;

  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = React.useState<File | null>(null);

  const handleAttachButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const paramsToSign = {
      // Parameters that need to be signed
      timestamp: Math.round(new Date().getTime() / 1000),
      eager: "c_pad,h_300,w_400|c_crop,h_200,w_260",
      public_id: crypto.randomUUID(),
      folder: "project-spellbound",
    };

    console.log(paramsToSign);

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      console.log("Selected files:", file);
      setImageFile(file);

      // Revisar que hacer despues con el archivo seleccionado:

      getCloudinarySignature(paramsToSign)
        .then((signature) => {
          console.log("Signature:", signature);
          // Use the signature to upload your media to Cloudinary

          uploadToCloudinary(file, signature, paramsToSign);
        })
        .catch((error) => {
          console.error("Error fetching signature:", error);
        });
    }
  };

  async function getCloudinarySignature(paramsToSign) {
    const response = await fetch("/api/upload-cloudinary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ paramsToSign }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.signature; // This will contain the Cloudinary signature
    } else {
      throw new Error("Error signing request");
    }
  }

  async function uploadToCloudinary(file, signature, params) {
    const formData = new FormData();

    const url =
      "https://api.cloudinary.com/v1_1/" +
      String(import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME) +
      "/auto/upload";

    console.log(url);

    formData.append("file", file);
    formData.append(
      "api_key",
      String(import.meta.env.PUBLIC_CLOUDINARY_API_KEY)
    );
    formData.append("timestamp", params.timestamp);
    formData.append("public_id", params.public_id);
    formData.append("signature", signature);
    formData.append("eager", "c_pad,h_300,w_400|c_crop,h_200,w_260");
    formData.append("folder", "project-spellbound");

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Upload result:", result.url);
    } else {
      console.error("Upload failed");
    }
  }

  return (
    <Draggable
      handle="#outlook-window-title-bar"
      nodeRef={nodeRef}
      positionOffset={{ x: "30%", y: "-95%" }}
    >
      <div
        ref={nodeRef}
        className="window absolute"
        style={{ width: "850px", height: "700px" }}
      >
        <div className="title-bar" id="outlook-window-title-bar">
          <div className="title-bar-text flex items-center">
            <img src={OutlookIcon.src} />
            <p>Outlook Express - Mensaje Nuevo</p>
          </div>
          <div className="title-bar-controls">
            <button aria-label="Help" />

            <button
              aria-label="Close"
              onClick={() => setOutlookAnswerVisible(false)}
            />
          </div>
        </div>

        <div className="window-body">
          {/* Email header */}
          <div className="m-2">
            <div className="flex items-center my-1">
              <p className="w-16">Para:</p>
              <input className="w-[750px]" type="text" />
            </div>
            <div className="flex items-center my-1">
              <p className="w-16">CC:</p>
              <input className="w-[750px]" type="text" />
            </div>
            <div className="flex items-center my-1">
              <p className="w-16">Asunto:</p>
              <input className="w-[750px]" type="text" />
            </div>
          </div>

          {/* Tools bar */}
          <div className="m-2">
            <button className="mr-1">
              <div
                className="inline-flex flex-col items-center p-1"
                onClick={handleAttachButtonClick}
              >
                <img src={AttachIcon.src} className="w-6" />
                <p>Adjuntar</p>

                {/* Hidden input for file picking */}
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>
            </button>

            <button className="mx-1 inactive-text">
              <div className="inline-flex flex-col items-center p-1">
                <img src={CutIcon.src} className="w-6 grayscale" />
                <p>Cortar</p>
              </div>
            </button>

            <button className="mx-1 inactive-text">
              <div className="inline-flex flex-col items-center p-1">
                <img src={CopyIcon.src} className="w-6 grayscale" />
                <p>Copiar</p>
              </div>
            </button>

            <button className="mx-1 inactive-text">
              <div className="inline-flex flex-col items-center p-1">
                <img src={PasteIcon.src} className="w-6 grayscale" />
                <p>Pegar</p>
              </div>
            </button>
          </div>

          {/* Email body */}
          <div className="m-2">
            <textarea className="w-[815px] h-[350px]"></textarea>
          </div>
        </div>

        <div>
          <p>Status bar</p>

          <video autoPlay loop muted playsInline width="128" height="128">
            <source src={RoverWaiting} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </Draggable>
  );
}

export default OutlookAnswerWindow;
