import React from "react";
import styled from "styled-components";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

const ActionButtonsContainer = styled.div`
  position: fixed;
  right: 10px;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999; /* Ensure this is lower than the bottom bar's z-index */
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #ff0055;
  }
`;
// love, comment, share icon
// static icon without functionality
const ActionButtons = () => {
  return (
    <ActionButtonsContainer>
      <ActionButton>
        <FaHeart />
      </ActionButton>
      <ActionButton>
        <FaComment />
      </ActionButton>
      <ActionButton>
        <FaShare />
      </ActionButton>
    </ActionButtonsContainer>
  );
};

export default ActionButtons;
