import React, { useRef, useEffect } from "react";
/**
 * VideoPlayer component that plays a video when it becomes visible and pauses
 * when it becomes invisible.
 */

import styled from "styled-components";

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
    // If the VideoPlayer is visible, play the video.
    if (isVisible) {
      videoRef.current.play();
    } else {
      // If the VideoPlayer is not visible, pause the video.
      videoRef.current.pause();
    }
  }, [isVisible]);

  // Render the video element with the provided source and styling.
  return <StyledVideo ref={videoRef} src={src} loop controls />;
};

export default VideoPlayer;
