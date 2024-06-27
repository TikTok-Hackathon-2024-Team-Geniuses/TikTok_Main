import React, { useRef, useEffect } from "react";
/**
 * VideoPlayer component that plays a video when it becomes visible and pauses
 * when it becomes invisible.
 */
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
  return (
    <video
      ref={videoRef}
      src={src}
      loop
      controls
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default VideoPlayer;
