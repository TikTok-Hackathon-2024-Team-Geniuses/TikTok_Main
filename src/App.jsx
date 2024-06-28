import React from "react";
import styled from "styled-components";
import "./App.css";
import VideoFeed from "./Components/Content_/VideoFeed";
import BottomBar from "./Components/NavigationBar/BottomBar";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  min-height: 100vh;
  width: 100%;
`;

const AppContent = styled.div`
  flex: 1;
  width: 100%;
  overflow: auto;
  padding-bottom: 50px; /* Space for bottom bar */
`;

function App() {
  return (
    <AppContainer>
      <AppContent>
        <VideoFeed />
      </AppContent>
      <BottomBar />
    </AppContainer>
  );
}

export default App;
