import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import Rover01 from "../assets/rover-01.mp4";
import Rover02 from "../assets/rover-02.mp4";
import Rover03 from "../assets/rover-03.mp4";
import Rover04 from "../assets/rover-04.mp4";
import Rover05 from "../assets/rover-05.mp4";
import Rover06 from "../assets/rover-06.mp4";
import Rover07 from "../assets/rover-07.mp4";

import { useCompletion } from "ai/react";

function RoverWindow({ RoverStart, RoverStop }) {
  const nodeRef = React.useRef(null);
  const { roverStartSignal, setRoverStartSignal } = RoverStart;
  const { roverStopSignal, setRoverStopSignal } = RoverStop;

  const [currentAssetIndex, setCurrentAssetIndex] = useState(0);

  const videoSources = [Rover01, Rover02, Rover03, Rover04, Rover05, Rover06, Rover07];

  const getRandomIndex = (currentIndex, length) => {
    let newIndex = Math.floor(Math.random() * length);
    // Ensure the new index is different from the current index
    while (newIndex === currentIndex) {
      newIndex = Math.floor(Math.random() * length);
    }
    return newIndex;
  };

  const { completion, complete } = useCompletion({
    api: "/api/completion",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAssetIndex((prevIndex) => getRandomIndex(prevIndex, videoSources.length));
    }, 6000); // 6 seconds in milliseconds

    return () => clearInterval(interval); // Cleanup on unmount
  });

  // Load this AI response while the user is waiting for the image to finish transformation
  useEffect(() => {
    // Define the async function
    if (!roverStartSignal) return;

    const fetchData = async () => {
      try {
        const response = await complete(
          "He cargado mi foto, y ahora mismo estoy esperando a que termine la introspección ontológica para echar un vistazo a mi alma."
        );
      } catch (err) {
      } finally {
      }
    };

    fetchData();

    // Set an interval to fetch data every 12 seconds
    const intervalId = setInterval(fetchData, 25000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [roverStartSignal]);

  // When the image has been transformed and got response, generate this AI response to the user
  useEffect(() => {
    // Define the async function
    //if (!roverStartSignal) return;

    const fetchData = async () => {
      try {
        const response = await complete(
          "La imagen se ha terminado de cargar y la puedo ver al desplazarme un poco más abajo"
        );
      } catch (err) {
      } finally {
      }
    };

    fetchData();
  }, [roverStopSignal]);

  return (
    <Draggable
      handle="#credits-window-title-bar"
      nodeRef={nodeRef}
      defaultPosition={{ x: 900, y: 250 }}
      position={null}
    >
      <div ref={nodeRef} className="absolute rover-window" style={{ width: "400px" }}>
        <div className="title-bar" id="credits-window-title-bar">
          <div className="title-bar-text"></div>
          <div className="title-bar-controls">
            <button aria-label="Help" />
          </div>
        </div>

        <div className="flex items-center bg-black p-4">
          <div className="">
            <video key={currentAssetIndex} autoPlay loop muted playsInline width="128" height="128">
              <source src={videoSources[currentAssetIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="talk-bubble tri-right left-in">
            <div className="talktext">
              <p className="text-base">{completion}</p>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default RoverWindow;
