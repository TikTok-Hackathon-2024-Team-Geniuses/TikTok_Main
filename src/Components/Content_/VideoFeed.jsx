import styled from "styled-components";
import VideoPlayer from "./VideoPlayer";
import { useInView } from "react-intersection-observer";
import { videos } from "./FetchVideoData";
import { useState } from "react";

const Div = styled.div`
  width: 100%; /* 100% of the viewport width */
  background-color: white;
  transform: translateY(20vh);
  border-radius: 30px 30px 0 0;
`;
const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`;

const VideoItemContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust height to fit above bottom bar */
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
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

const VideoItem = ({ videoSrc, images }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });
  const [modal, setModal] = useState(false);
  function toggleBtn() {
    setModal(true);
    if (modal) {
      setModal(false);
    }
  }
  return (
    <VideoItemContainer ref={ref}>
      <VideoPlayer src={videoSrc} isVisible={inView} />

      <Overlay>
        {modal ? (
          <BoxModal toggleBtn={toggleBtn} />
        ) : (
          <BoxContainer>
            {images.map((imgSrc, index) => (
              <Box key={index}>
                <Image
                  onClick={() => toggleBtn()}
                  src={imgSrc}
                  alt={`Box ${index + 1}`}
                />
              </Box>
            ))}
          </BoxContainer>
        )}
      </Overlay>
    </VideoItemContainer>
  );
};
function BoxModal({ toggleBtn }) {
  return (
    <Div className="modal">
      <button onClick={() => toggleBtn()}>Closing Button</button>
      <div className="photoarea"></div>
      <div className="infoarea"></div>{" "}
      <div className="modalbuttons">
        <div>See All Details</div>
        <div>Add To Card</div>
      </div>
    </Div>
  );
}

export default VideoFeed;
