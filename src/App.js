import React, { Suspense } from "react";

import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";
import { AnimattedSphere } from "./components/AnimattedSphere";
function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Box />
          </Suspense>
        </Canvas>

        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <AnimattedSphere />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App;
