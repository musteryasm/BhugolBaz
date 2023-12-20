// App.js /AIzaSyCloOFxFC3egPYUQFHQ2GaD1Tmtt9Pc6Zg

import React, { useState } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";
import { DelayedTopSection } from "./components/top";
import App2 from './App2';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  const [renderApp2, setRenderApp2] = useState(false);

  const switchToApp2 = () => {
    setRenderApp2(true);
  };

  return (
    <CanvasContainer>
      {renderApp2 ? (
        <App2 />
      ) : (
        <>
          <DelayedTopSection onPlayButtonClick={switchToApp2} />
          <Canvas>
              <Earth />
          </Canvas>
        </>
      )}
    </CanvasContainer>
  );
}

export default App;
