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

function RoverWindow({ RoverStart }) {
  const nodeRef = React.useRef(null);
  const { roverStartSignal, setRoverStartSignal } = RoverStart;

  const [currentAssetIndex, setCurrentAssetIndex] = useState(0);

  const videoSources = [
    Rover01,
    Rover02,
    Rover03,
    Rover04,
    Rover05,
    Rover06,
    Rover07,
  ];

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
      setCurrentAssetIndex((prevIndex) =>
        getRandomIndex(prevIndex, videoSources.length)
      );
    }, 5000); // 10 seconds in milliseconds

    console.log("current index:" + currentAssetIndex);
    return () => clearInterval(interval); // Cleanup on unmount
  });

  useEffect(() => {
    // Define the async function
    if (!roverStartSignal) return;

    const fetchData = async () => {
      try {
        const response = await complete(
          "He cargado mi foto, y ahora mismo estoy esperando a que termine la transformación. Pregúntame cómo se siente."
        );
      } catch (err) {
      } finally {
      }
    };

    fetchData();

    // Set an interval to fetch data every 12 seconds
    const intervalId = setInterval(fetchData, 12000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [roverStartSignal]);

  return (
    <Draggable
      handle="#credits-window-title-bar"
      nodeRef={nodeRef}
      defaultPosition={{ x: 900, y: -500 }}
      position={null}
    >
      <div
        ref={nodeRef}
        className="window absolute rover-window"
        style={{ width: "400px" }}
      >
        <div className="title-bar" id="credits-window-title-bar">
          <div className="title-bar-text"></div>
          <div className="title-bar-controls">
            <button aria-label="Help" />
          </div>
        </div>

        <div className="flex items-center bg-black p-4">
          <div className="">
            <video
              key={currentAssetIndex}
              autoPlay
              loop
              muted
              playsInline
              width="128"
              height="128"
            >
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
