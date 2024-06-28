import React, { useRef, useEffect } from "react";
import styled from "styled-components";

/**
 * VideoPlayer component that plays a video when it becomes visible and pauses
 * when it becomes invisible.
 */
const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoPlayer = ({ src, isVisible }) => {
  // Reference to the video element
  const videoRef = useRef(null);

  /**
   * Effect that plays or pauses the video based on the visibility.
   */
  useEffect(() => {
    const video = videoRef.current;
    if (isVisible && video.paused) {
      video.play();
    } else if (!isVisible && !video.paused) {
      video.pause();
    }
  }, [isVisible]);

  // Render the video element with the provided source and styling.
  return <StyledVideo ref={videoRef} src={src} loop muted controls />;
};

export default VideoPlayer;
