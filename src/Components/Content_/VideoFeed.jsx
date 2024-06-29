import React from "react";
import VideoPlayer from "./VideoPlayer";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { videos } from "./FetchVideoData";
/**
 * VideoFeed component that renders a list of VideoItem components,
 * each containing a video player.
 */
const VideoFeed = () => {
  return (
    <FeedContainer>
      {videos.map((video, index) => (
        <VideoItem
          key={index}
          videoSrc={video.videoSrc}
          images={video.images}
        />
      ))}
    </FeedContainer>
  );
};

export default VideoFeed;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`;

const VideoItemContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  margin-bottom: 10px;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 65px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0 1vw;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
`;

const Box = styled.div`
  background: white;
  padding: 1px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 18%;
  aspect-ratio: 1;
  margin: 0 4px;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

/**
 * VideoItem component that renders a video player with a given source URL.
 */
const VideoItem = ({ videoSrc, images }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });

  return (
    <VideoItemContainer ref={ref}>
      <VideoPlayer src={videoSrc} isVisible={inView} />
      <Overlay>
        <BoxContainer>
          {images.map((imgSrc, index) => (
            <Box key={index}>
              <Image src={imgSrc} alt={`Box ${index + 1}`} />
            </Box>
          ))}
        </BoxContainer>
      </Overlay>
    </VideoItemContainer>
  );
};
