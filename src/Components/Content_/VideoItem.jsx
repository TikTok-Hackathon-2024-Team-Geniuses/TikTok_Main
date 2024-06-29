import React, { forwardRef } from "react";
import styled from "styled-components";
import VideoPlayer from "./VideoPlayer";
import userIcon from "../../assets/user-icon.webp";

const VideoItemContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow: hidden;
  scroll-snap-align: start;
`;

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  z-index: 1;
  pointer-events: none; /* Allow clicks to pass through to the video */
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  pointer-events: auto; /* Enable pointer events for this element */
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

const VideoDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 10px; /* Additional padding for text spacing */
  pointer-events: auto; /* Enable pointer events for this element */
`;

const Caption = styled.p`
  color: white;
  font-size: 14px;
  margin: 0;
`;

const Hashtag = styled.span`
  color: #00f2ea;
  font-size: 14px;
  margin-left: 5px;
`;

const MusicDetails = styled.div`
  color: white;
  font-size: 12px;
  margin-top: 10px;
`;

const VideoItem = forwardRef(({ src, isVisible }, ref) => {
  return (
    <VideoItemContainer ref={ref}>
      <VideoWrapper>
        <VideoPlayer src={src} isVisible={isVisible} />
      </VideoWrapper>
      <Overlay>
        <UserDetails>
          <UserAvatar src={userIcon} alt="User" />
          <UserName>Static Username</UserName>
        </UserDetails>
        {/* <VideoDetails>
          <Caption>
            This is a caption <Hashtag>#hashtag</Hashtag>
          </Caption>
          <MusicDetails>🎵 Song name - Artist name</MusicDetails>
        </VideoDetails> */}
      </Overlay>
    </VideoItemContainer>
  );
});

// Add display name for debugging
VideoItem.displayName = "VideoItem";

export default VideoItem;
