import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import VideoItem from "./VideoItem";
import ActionButtons from "../Content_/ActionButtons";

const VideoFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`;

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://archive.org/download/Sintel/sintel-2048-surround.mp4",
  "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4",
];

/**
 * VideoFeed component that renders a list of VideoItem components,
 * each containing a video player.
 */
const VideoFeed = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const videoRefs = useRef([]);

  const handleScroll = () => {
    const index = videoRefs.current.findIndex((videoRef) => {
      const rect = videoRef.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    });

    if (index !== -1 && index !== visibleIndex) {
      setVisibleIndex(index);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleIndex]);

  return (
    <VideoFeedContainer onScroll={handleScroll}>
      {videos.map((src, index) => (
        <VideoItem
          key={index}
          src={src}
          ref={(el) => (videoRefs.current[index] = el)}
          isVisible={index === visibleIndex}
        />
      ))}
      <ActionButtons />
    </VideoFeedContainer>
  );
};

export default VideoFeed;
