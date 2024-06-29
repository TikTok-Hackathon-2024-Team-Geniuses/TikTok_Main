import React from "react";
import styled from "styled-components";
import "./App.css";
import VideoFeed from "./Components/Content_/VideoFeed";
import BottomBar from "./Components/NavigationBar/BottomBar";
import ActionButtons from "./Components/Content_/ActionButtons";
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  overflow: hidden;
`;

const AppContent = styled.div`

  width: 100%;
  overflow-y: auto;
  padding-bottom: 70px; /* Space for BottomBar */
`;

const StyledBottomBar = styled(BottomBar)`
  height: 70px; /* Fixed height for BottomBar */
  position: fixed;
  bottom: 0;
  width: 100%;
`;

function App() {
  return (
    <AppContainer>
      <AppContent>
        <VideoFeed />
        <ActionButtons />
      </AppContent>
      <StyledBottomBar />
    </AppContainer>
  );
}

export default App;
