import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";

function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas className="canvas">
          <Box />
        </Canvas>
        <Canvas className="canvas">
          <Box />
        </Canvas>
        <Canvas className="canvas">
          <Box />
        </Canvas>
      </div>
    </>
  );
}

export default App;
