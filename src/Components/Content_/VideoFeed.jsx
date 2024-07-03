import styled, { keyframes } from "styled-components";
import VideoPlayer from "./VideoPlayer";
import { useInView } from "react-intersection-observer";
import { videos } from "./FetchVideoData";
import { useState } from "react";

const scrollUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(20vh);
  }
`;
const Div = styled.div`
  height: 80vh; /* 80% of the viewport height */
  width: 100%; /* 100% of the viewport width */
  background-color: white;
  transform: translateY(20vh);
  border-radius: 25px 25px 0 0;
  position: fixed; /* Use fixed position to overlay */
  bottom: 0; /* Position at the bottom */
  z-index: 2000; /* Higher z-index to overlay action buttons */
  animation: ${scrollUp} 0.1s ease-out;
`;
const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`;

const VideoItemContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px); /* Adjust height to fit above bottom bar */
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

const BackButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.7em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  position: absolute;
  top: 30px;
  left: 10px;
  margin-left: 25px;
`;

const CartButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: .8em 2.5em;
  font-size: 1.12em;
  font-weight: 500;
  font-family: inherit;
  background-color: #ff0073;
  cursor: pointer;
  transition: border-color 0.25s;
  position: absolute;
  top: 500px;
  right: 55px;
`;

const BuyNowButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: .8em 2.7em;
  font-family: inherit;
  font-size: 1.12em;
  background-color: #d1d1d1;
  cursor: pointer;
  transition: border-color 0.25s;
  position: absolute;
  top: 500px;
  left: 55px;
  color: black;
`

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
    <Div className="modal" style={{ zIndex: '1000' }}>
      <BackButton onClick={() => toggleBtn()}>Back</BackButton>
      <div className="photoarea"></div>
      <div className="infoarea"></div>{" "}
      <div className="modalbuttons">
        <BuyNowButton onClick={() => toggleBtn()}>Buy now</BuyNowButton>
        <CartButton onClick={() => toggleBtn()}>Add to cart</CartButton>
      </div>
    </Div>
  );
}

export default VideoFeed;
