import React from "react";
import p5 from "p5";
import { mountFlex } from "p5.flex";

import { vert, frag } from "../components/backgroundSketch/shader.js";

const emojis = [
  "🕷️",
  "🦇",
  "🌙",
  "🕸️",
  "🕯️",
  "⚰️",
  "🦴",
  "🍪",
  "☠️",
  "👹",
  "🤡",
  "👺",
  "💀",
  "🧛🏻‍♂️",
  "💉",
  "🎃",
  "👁️",
  "🪓",
  "🔪",
  "🧠",
  "🧟‍♂️",
  "🍬",
  "🍫",
  "👻",
  "🌌",
  "🍭",
  "😈",
];

let theShader;

// Grid. if the screen is not square will expand more cells
const cols = 32;
const rows = 32;

// Controls
let flowType = 6;
let isShadow = true;
let isDistortions = true;
let wei = 0.3;

let atlas = { atlas: emojis, cols: 0, rows: 0 };

class Sketch extends React.Component {
  constructor(props) {
    super(props);
    //p5 instance mode requires a reference on the DOM to mount the sketch
    //So we use react's createRef function to give p5 a reference
    this.myRef = React.createRef();
  }

  // This uses p5's instance mode for sketch creation and namespacing

  Sketch = (p) => {
    p.preload = () => {
      theShader = new p5.Shader(this.renderer, vert, frag);
    };

    // Native p5 functions work as they would normally but prefixed with
    // a p5 object "p"
    mountFlex(p5);

    p.setup = () => {
      //Everyhting that normally happens in setup works

      // shaders require WEBGL mode to work
      //p.createCanvas(mySize, (mySize / 16) * 9, p.WEBGL);
      p.createCanvas(p.windowWidth / 10, p.windowHeight / 10, p.WEBGL);
      p.background(0);
      p.noStroke();

      p.flex({
        container: { parent: shadderContainer },
        canvas: { scale: 4, fit: p.FILL },
        stylePage: false,
      });

      p.pixelDensity(4);

      const getAtlas = ({ array, cols, unitSize, unitScale = 0.8 }) => {
        const rows = p.ceil(emojis.length / cols);
        const gfx = p.createGraphics(unitSize * cols, unitSize * rows);

        gfx.fill(255);
        gfx.stroke(255);
        gfx.textAlign(p.CENTER, p.CENTER);
        gfx.textSize(unitSize * unitScale);
        array.forEach((value, index) => {
          gfx.text(value, unitSize / 2 + unitSize * (index % cols), unitSize / 2 + unitSize * gfx.floor(index / cols));
        });
        return { atlas: gfx, cols: cols, rows: rows };
      };

      // Prepare atlas
      atlas = getAtlas({ array: emojis, cols: 5, unitSize: 128 });
    };

    p.draw = () => {
      // And everything that normally goes in draw in here
      // shader() sets the active shader with our shader
      p.background(0);
      p.shader(theShader);

      theShader.setUniform("iResolution", [p.width, p.height]);
      theShader.setUniform("iMouse", [p.mouseX, p.mouseY]);
      theShader.setUniform("iGrid", [cols, rows]);
      theShader.setUniform("iAtlas", atlas.atlas);
      theShader.setUniform("iAtlasGrid", [atlas.cols, atlas.rows]);
      theShader.setUniform("iLength", emojis.length);
      theShader.setUniform("iTime", p.frameCount / 60);
      theShader.setUniform("iType", flowType);
      theShader.setUniform("iIsShadow", isShadow);
      theShader.setUniform("iIsDistortions", isDistortions);
      theShader.setUniform("iWei", wei);

      // rect gives us some geometry on the screen
      p.rect(0, 0, p.width, p.height);
    };
  };

  componentDidMount() {
    //We create a new p5 object on component mount, feed it

    //this.myP5 = new p5(this.Sketch, this.myRef.current);
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }

  render() {
    return (
      //This div will contain our p5 sketch
      <div className="absolute" ref={this.myRef}></div>
    );
  }
}

export default Sketch;
