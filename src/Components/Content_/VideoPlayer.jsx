import React, { useRef, useEffect } from "react";
import styled from "styled-components";

/**
 * VideoPlayer component that plays a video when it becomes visible and pauses
 * when it becomes invisible.
 */
const StyledVideo = styled.video`
  width: 100%;
  height: 92vh; 
  object-fit: cover;
`;

const VideoPlayer = ({ src, isVisible }) => {
  // Reference to the video element
  const videoRef = useRef(null);

  /**
   * Effect that plays or pauses the video based on the visibility.
   */

  useEffect(() => {
    if (isVisible) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVisible]);

  // Render the video element with the provided source and styling.
  return <StyledVideo ref={videoRef} src={src} loop controls />;
};

export default VideoPlayer;
function BoxModal({ toggleBar, isBarOpen }) {
  return (
    <Div className="modal">
      <button
        onClick={() => toggleBar()}
        className={!isBarOpen ? "btnhidden" : "btn"}
      >
        Closing Button
      </button>
      <div className="photoarea"></div>
      <div className="infoarea"></div>{" "}
      <div className="modalbuttons">
        <div>See All Details</div>
        <div>Add To Card</div>
      </div>
    </Div>
  );
}
