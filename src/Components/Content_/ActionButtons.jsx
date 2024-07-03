import React, { useState } from "react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import "../../styles/ActionButtons.css";
import styled from "styled-components";

const ModalContainer = styled.div`
  height: 72vh; /* 72% of the viewport height */
  width: 90%; /* 90% of the viewport width */
  max-width: 480px; /* Maximum width */
  background-color: white;
  transform: translateY(15vh);
  border-radius: 20px 20px 0 0;
  z-index: 1000;
  padding-bottom: 20px; /* Padding bottom */
  margin: 0 auto; /* Center horizontally */
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  position: fixed;
  left: 0;
  right: 0;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  color: black; /* Text color */
`;

const ActionButtonContainer = styled.div`
  position: fixed;
  bottom: 90px; /* Adjust the position based on the bottom bar */
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 999;
`;

const CloseButton = styled(IoCloseSharp)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 36px; 
  color: black; /* Close button color */
`;

const ActionButtons = () => {
  const [isClicked, setIsClicked] = useState(false);

  const ModalPart = () => {
    return (
      <ModalContainer isVisible={isClicked}>
        <CloseButton
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        />
        <h1>AI</h1>
        <p>Testing</p>
      </ModalContainer>
    );
  };

  return (
    <>
      <ModalPart />
      <ActionButtonContainer className="action__button__container">
        {!isClicked && (
          <div>
            <FaHeart />
            <FaComment />
            <FaShare />
            <BsStars
              onClick={() => {
                setIsClicked(!isClicked);
              }}
            />
          </div>
        )}
      </ActionButtonContainer>
    </>
  );
};

export default ActionButtons;
