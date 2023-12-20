import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { InnerEarth } from "./components/earth/inner";
import { TopSection2 } from "./components/top/index2";
import App3 from './App3';
import App4 from './App4';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;
function App2() {
  const [renderApp3, setRenderApp3] = useState(false);
  const [renderApp4, setRenderApp4] = useState(false);

  const switchToApp3 = () => {
    setRenderApp3(true);
  };

  const switchToApp4 = () => {
    setRenderApp4(true);
  };

  return (
    <CanvasContainer>
      {renderApp3 ? (
        <App3 />
      ) : renderApp4 ? (
        <App4 /> // Replace 'App4' with the actual component name for multiplayer
      ) : (
        <>
          <TopSection2
            onPlayButtonClick={switchToApp3}
            onMultiplayerButtonClick={switchToApp4}
          />
          <Canvas>
            <Suspense fallback={null}>
              <InnerEarth />
            </Suspense>
          </Canvas>
        </>
      )}
    </CanvasContainer>
  );
}

export default App2;