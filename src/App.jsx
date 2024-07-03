import React from "react";
import styled from "styled-components";
import "./App.css";
import VideoFeed from "./Components/Content_/VideoFeed";
import BottomBar from "./Components/NavigationBar/BottomBar";
import ActionButtons from "./Components/Content_/ActionButtons";

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto; /* AppContent takes available space, BottomBar has fixed size */
  height: 100vh; /* Full viewport height */
  background-color: black;
  color: white;
`;

const AppContent = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 75px); /* Adjust height to fit above bottom bar */
`;

const StyledBottomBar = styled.div`
  height: 70px; /* Fixed height for BottomBar */
  width: 100%;
  flex-shrink: 0; /* Prevent BottomBar from shrinking */
`;

function App() {
  return (
    <AppContainer>
      <AppContent>
        <VideoFeed />
        <ActionButtons />
      </AppContent>
      <StyledBottomBar>
        <BottomBar />
      </StyledBottomBar>
    </AppContainer>
  );
}

export default App;
