import styled, { keyframes } from "styled-components";
import VideoPlayer from "./VideoPlayer";
import { useInView } from "react-intersection-observer";
import { videos, svgCategory, interests } from "./FetchVideoData";
import {product1_1} from "./data1_1";
import { useState } from "react";
import {
  AIBoxContainer,
  ProductImage,
  ProductTitle,
  ProductRating,
  ProductPrice,
} from "./AI_modal";
import {
  InfoArea,
  ItemName,
  ItemPrice,
  ItemColor,
  ColorSwatch,
  ColorLabel,
} from "./InfoAreaStyles";

const scrollUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(20vh);
  }
`;
const PhotoArea = styled.img`
  margin-top: 70px;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;
const Div = styled.div`
  height: 80vh; /* 80% of the viewport height */
  width: 100%; /* 100% of the viewport width */
  background-color: white;
  transform: translateY(20vh);
  border-radius: 25px 25px 0 0;
  position: relative;
  animation: ${scrollUp} 0.1s ease-out;
`;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  height: 90vh;
  width: 100%;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`;

const VideoItemContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 70px); /* Adjust height to fit above bottom bar */
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
  /* border-radius: 8px;
  border: 1px solid transparent;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  position: absolute;
  top: 10px;
  left: 10px;
  margin-left: 25px; */
  width: 80px;
  height: 10px;
  background-color: gray;
  margin-top: 15px;
  font-size: 0;
`;

const CartButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.8em 1.5em;
  font-size: 1.1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #ff0073;
  cursor: pointer;
  transition: border-color 0.25s;
  position: absolute;
  top: 480px;
  right: 75px;
`;

const BuyNowButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.8em 1.7em;
  font-family: inherit;
  font-size: 1.1em;
  background-color: #d1d1d1;
  cursor: pointer;
  transition: border-color 0.25s;
  position: absolute;
  top: 480px;
  left: 80px;
  color: black;
`;
const AIbutton = styled.img`
  color: pink;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0;
  margin: 30px;
  background-color: #7ae6e3;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
`;
const Svg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 30px;
  cursor: pointer;
`;
const AIback = styled.div`
  margin: 30px;
  width: 100px;
  height: 30px;
  background-color: gray;
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
  const [selectedImage, setSelectedImage] = useState(null);
  const [cateModal, setCateModal] = useState(false);
  function toggleBtn(img) {
    setModal(true);
    setSelectedImage(img);
    if (modal) {
      setModal(false);
    }
    console.log(selectedImage);
  }
  function cateBtn() {
    setCateModal((prev) => !prev);
  }
  return (
    <VideoItemContainer ref={ref}>
      <VideoPlayer src={videoSrc} isVisible={inView} />
 
      <Svg style={modal ? { display: "none" } : null} onClick={() => cateBtn()}>
        {svgCategory}
      </Svg>
      <Overlay>
        {modal ? (
          <BoxModal toggleBtn={toggleBtn} selectedImage={selectedImage} />
        ) : cateModal ? (
          <InterestsGrid />
        ) : (
          <BoxContainer>
            {images.map((img, index) => (
              <Box key={index}>
                <Image
                  onClick={() => toggleBtn(img)}
                  src={img.src}
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

function BoxModal({ toggleBtn, selectedImage }) {
  const [aibutton, setAibutton] = useState(false);

  const aiToggle = () => {
    setAibutton((prevState) => !prevState);
  };
  return (
    <Div className="modal">
      {aibutton ? (
        <AI_modal aiToggle={aiToggle} products={selectedImage.products} />
      ) : (
        <>
          <BackButton onClick={toggleBtn}>Back</BackButton>
          <AIbutton src="chat.png" onClick={aiToggle} />
          <div>
            <PhotoArea src={selectedImage.src} />
          </div>
          <InfoArea>
            <ItemName>{selectedImage.id}</ItemName>
            <ItemPrice>{selectedImage.price}</ItemPrice>
            <ItemColor>
              <ColorSwatch color={selectedImage.colorCode} />
              <ColorLabel>Color: {selectedImage.color}</ColorLabel>
            </ItemColor>
          </InfoArea>
          <div className="modalbuttons">
            <BuyNowButton onClick={toggleBtn}>Buy now</BuyNowButton>
            <CartButton onClick={toggleBtn}>Add to cart</CartButton>
          </div>
        </>
      )}
    </Div>
  );
}

const InterestsGrid = () => {
  return (
    <div className="interests-grid">
      {interests.map((interest, index) => (
        <div key={index} className="interest-item">
          {interest}
        </div>
      ))}
    </div>
  );
};

const AI_modal = ({ aiToggle, products }) => {
  return (
    <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      <AIback onClick={aiToggle}>GO BACK</AIback>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((product, index) => (
          <AIBoxContainer key={index}>
            <ProductImage src={product.link} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductRating>{product.rating}</ProductRating>
            <ProductPrice>{product.price}</ProductPrice>
          </AIBoxContainer>
        ))}
      </div>
    </div>
  );
};


export default VideoFeed;
