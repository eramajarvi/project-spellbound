import React from "react";
import Shader from "./Shader.jsx";

function ShaderWrapper({ shaderVisibility }) {
  const { isShaderVisible, setIsShaderVisible } = shaderVisibility;

  return (
    <div className="">
      {/* This wrapper is needed to contain the shader in a component */}
      <Shader />
    </div>
  );
}

export default ShaderWrapper;
