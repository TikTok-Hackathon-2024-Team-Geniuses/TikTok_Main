import styled, { keyframes } from "styled-components";
import VideoPlayer from "./VideoPlayer";
import { useInView } from "react-intersection-observer";
import { videos, svgCategory, interests } from "./FetchVideoData";
import { useState } from "react";
import {
  ProductImage,
  ProductTitle,
  ProductRating,
  ProductPrice,
  AmazonBoxContainer,
  StarRating,
} from "./Amazon_modal";
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
  height: 85vh; /* 80% of the viewport height */
  width: 100%; /* 100% of the viewport width */
  background-color: white;
  transform: translateY(20vh);
  border-radius: 25px 25px 0 0;
  position: relative;
  animation: ${scrollUp} 0.1s ease-out;
  overflow-y: scroll;
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
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  margin: 25px;
`;
const Svg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 30px;
  cursor: pointer;
`;
const AIback = styled.img`
  margin: 30px;
  margin-left: 50px;
  width: 30px;
  height: 30px;
  position: absolute;
  left: 0px;
`;

const AILogo = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -400%);
`;

const UserMessage = styled.div`
  padding: 0.625em;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: #1c9bef;
  position: absolute;
  right: 0;
  top: 150px;
  padding: 20px;
  margin-right: -7px;
`;

const AIMessage = styled.div`
  color: black;
`;
const Message = styled.div`
  font-size: 1em;
  margin-bottom: 0.31em;
  word-wrap: break-word;
`;
const SimilarBack = styled.div`
  margin: 30px;
  width: 100px;
  height: 30px;
  background-color: #a3f0ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.6px solid black; /* Dark cyan border */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  font-size: 0.7em;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #75dcf0;
  }
`;
const SimilarButtonstyle = styled.button`
  width: 100px;
  height: 35px;
  position: absolute;
  left: 0px;
  margin: 45px;
  background-color: #a3f0ff;
  border: 0.6px solid black; /* Dark cyan border */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  font-size: 0.7em;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #75dcf0;
  }
`;
const AmazonContainer = styled.div`
  max-height: 67vh;
  overflow-y: auto;
  padding-right: 15px; /* Adjust for scrollbar width */
`;
const SimilarBack = styled.div`
  margin: 30px;
  width: 100px;
  height: 30px;
  background-color: #a3f0ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: .6px solid black; /* Dark cyan border */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  font-size: .7em;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #75dcf0;
  }
`;
const SimilarButtonstyle = styled.button`
  width: 100px;
  height: 35px;
  position: absolute;
  left: 0px;
  margin: 45px;
  background-color: #a3f0ff;
  border: .6px solid black; /* Dark cyan border */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  font-size: .7em;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #75dcf0;
  }
`;
const AmazonContainer = styled.div`
  max-height: 67vh;
  overflow-y: auto;
  padding-right: 15px; /* Adjust for scrollbar width */
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
  const [similarbutton, setSimilarbutton] = useState(false);

  const [message, setMessage] = useState(false);
  // const [similarbutton, setSimilarbutton] = useState(false);

  const aiToggle = () => {
    setAibutton((prevState) => !prevState);
    setMessage(false);
  };

  const similarToggle = () => {
    setSimilarbutton((prevState) => !prevState);
  };

  return (
    <Div className="modal">
      {aibutton ? (
        <Iamodal aiToggle={aiToggle}/>
      ) : similarbutton ? (
        <Amazonmodal similarToggle={similarToggle} products={selectedImage.products} />
      ) : (
        <>
          <BackButton onClick={toggleBtn}>Back</BackButton>
          <AIbutton src="chat.png" onClick={aiToggle} />
          <SimilarButtonstyle onClick={similarToggle}>Similar products</SimilarButtonstyle>
          <div>
            <div>
              <Iamodal aiToggle={aiToggle} />
              {message ? (
                <div>
                  <UserMessage style={{ color: "black" }}>
                    {" "}
                    <Message> Learn cool facts about this product </Message>
                  </UserMessage>
                  <div style={{ color: "black" }} className="aimessage">
                    <div className="message">
                      <p>
                        Sunshine Vitamin: Vitamin D3, also known as
                        cholecalciferol, is produced in your skin in response to
                        sunlight exposure. It's often called the "sunshine
                        vitamin." Bone Health: Vitamin D3 is crucial for calcium
                        absorption, which is essential for maintaining strong
                        bones and teeth. It helps prevent conditions like
                        osteoporosis and rickets.
                      </p>
                    </div>
                  </div>
                  <input className="AIinput" placeholder="Message" />;
                </div>
              ) : (
                <div className="suggestions">
                  <AILogo src="chat.png" />{" "}
                  <div
                    className="texts"
                    onClick={() => {
                      messageToggle();
                    }}
                  >
                    Learn cool facts about this product
                  </div>
                </div>
              )}
            </div>
            <Iamodal aiToggle={aiToggle} />
          </div>
        ) : similarbutton ? (
          <Amazonmodal
            similarToggle={similarToggle}
            products={selectedImage.products}
          />
        ) : (
          <>
            <BackButton onClick={toggleBtn}></BackButton>
            <AIbutton src="chat.png" onClick={aiToggle} />
            <SimilarButtonstyle onClick={similarToggle}>
              Similar products
            </SimilarButtonstyle>
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
  };


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

const Iamodal = ({ aiToggle }) => {
  return <AIback src="back.png" onClick={aiToggle}></AIback>;
};

{/* const Amazonmodal = ({ similarToggle, products }) => {
  return (
    <AmazonContainer>
      <SimilarBack onClick={similarToggle}>GO BACK</SimilarBack>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products.map((product, index) => (
          <AmazonBoxContainer key={index}>
            <ProductImage src={product.link} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductRating>
              <StarRating rating={product.rating} />
            </ProductRating>
            <ProductPrice>{product.price}</ProductPrice>
          </AmazonBoxContainer>
        ))}
      </div>
    </AmazonContainer>
  );
}; */}

const Amazonmodal = ({ similarToggle, products }) => {
  return (
    <AmazonContainer>
      <SimilarBack onClick={similarToggle}>GO BACK</SimilarBack>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((product, index) => (
          <AmazonBoxContainer key={index}>
            <ProductImage src={product.link} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductRating><StarRating rating={product.rating} />
            </ProductRating>
            <ProductPrice>{product.price}</ProductPrice>
          </AmazonBoxContainer>
        ))}
      </div>
    </AmazonContainer>
  );
};


export default VideoFeed;
