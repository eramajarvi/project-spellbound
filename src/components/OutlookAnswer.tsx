import React from "react";

import Draggable from "react-draggable";

import OutlookIcon from "../assets/outlook.png";
import AttachIcon from "../assets/attach.png";
import CutIcon from "../assets/cut.png";
import CopyIcon from "../assets/copy.png";
import PasteIcon from "../assets/paste.png";
import Horro01 from "../assets/horror-01.webp";

function OutlookAnswerWindow({
  OutlookAnswerWindowVisibility,
  RoverWindowVisibility,
  warningWindowVisibility,
}) {
  const nodeRef = React.useRef(null);

  const { isOutlookAnswerVisible, setOutlookAnswerVisible } =
    OutlookAnswerWindowVisibility;

  const { isRoverWindowVisible, setRoverWindowVisible } = RoverWindowVisibility;

  const { isWarningWindowVisible, setWarningWindowVisible } =
    warningWindowVisibility;

  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = React.useState<File | null>(null);
  const [fileIsPicked, setFileIsPicked] = React.useState(false);
  const [imageURL, setImageURL] = React.useState(null);

  const [progress, setProgress] = React.useState(0);

  const currentDate = new Date().toLocaleString();

  const handleAttachButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const paramsToSign = {
      // Parameters that need to be signed
      timestamp: Math.round(new Date().getTime() / 1000),
      eager: "t_panic-01",
      public_id: crypto.randomUUID(),
      folder: "project-spellbound",
    };

    console.log(paramsToSign);

    if (event.target.files && event.target.files[0]) {
      setFileIsPicked(true);
      setRoverWindowVisible(true);
      setImageURL(URL.createObjectURL(event.target.files[0]));

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
    formData.append("eager", "t_panic-01");
    formData.append("folder", "project-spellbound");

    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener("progress", (e) => {
      setProgress(Math.round((e.loaded * 100.0) / e.total));
      console.log(Math.round((e.loaded * 100.0) / e.total));
    });

    xhr.onreadystatechange = (e) => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const response = JSON.parse(xhr.responseText);

        setImageFile(response.secure_url);
        console.log(response.secure_url);
      }
    };

    xhr.send(formData);

    xhr.onload = function () {
      if (xhr.status === 200) {
        // Success
        console.log("Upload complete!", xhr.responseText);
      } else {
        console.error("Error during upload", xhr.statusText);
      }
    };
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
              onClick={() => setWarningWindowVisible(true)}
            />
          </div>
        </div>

        <div className="window-body">
          {/* Email header */}
          <div className="m-2">
            <div className="flex items-center my-1">
              <p className="w-16">Para:</p>
              <input
                className="w-[750px] text-sm"
                type="text"
                placeholder="notifications@fbi.gov"
                disabled
              />
            </div>
            <div className="flex items-center my-1">
              <p className="w-16">CC:</p>
              <input
                className="w-[750px] text-sm"
                type="text"
                placeholder="p2224j@shallowbay.dev"
                disabled
              />
            </div>
            <div className="flex items-center my-1">
              <p className="w-16">Asunto:</p>
              <input
                className="w-[750px] text-sm"
                type="text"
                value="Te envío mi foto porque aquí todo está muy bien"
                onChange={() => {}}
              />
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
          <div className="m-2 bg-white overflow-y-auto h-[480px] p-1">
            {/* Original email */}
            <div className="p-4 text-base">
              Hola, <br />
              Les adjunto una foto mía para demostrar que estoy bien:
              {fileIsPicked ? (
                <div>
                  <br />
                  <img src={imageURL} alt="Selected file" className="w-96" />
                </div>
              ) : null}
            </div>
            <div className="p-4">
              <div className="text-sm">
                <hr className="border-1 border-black" />
                <br />
                <p>De: notifications@fbi.gov</p>
                <p>Enviado: {currentDate}</p>
                <p>Para: Usted</p>
                <p>
                  Asunto: [URGENTE] Avistamientos detectados cerca de su área
                </p>
                <br />
                <p className="font-extrabold">
                  Haga click en Responder a este email y{" "}
                  <u>enviénos una foto suya</u> para asegurarnos que está bien.
                  <br />
                  Por favor cierre todas las puertas y ventanas de su casa y no
                  le abra a nadie.
                </p>
                <img src={Horro01.src} className="size-64 mb-2 mt-2" />
                Recientemente nuestros equipos de mediciones detectaron niveles
                anormales de avistamientos de{" "}
                <p className="font-semibold inline-block">
                  conceptos ininteligibles
                </p>{" "}
                cerca de su área.
                <br />
                <br />
                Sólo son detectables al utilizar cualquier dispositivo que sea
                capaz de capturar fotones.
                <br />
                <br />
                Estas entidades más allá de la comprensión humana tienen la
                capacidad de aparecer en fotografías tomadas en cámaras comunes.
                Es díficil saber cuándo aparecerán.
                <br />
                <br />
                Espere más instrucciones de nuestra parte una vez nos aseguremos
                que está bien.
              </div>
            </div>
          </div>
        </div>

        <div className="status-bar">
          <p className="status-bar-field">Press F1 for help</p>
          <p className="status-bar-field">Slide 1</p>
          <p className="status-bar-field">CPU Usage: 14%</p>
        </div>
      </div>
    </Draggable>
  );
}

export default OutlookAnswerWindow;
