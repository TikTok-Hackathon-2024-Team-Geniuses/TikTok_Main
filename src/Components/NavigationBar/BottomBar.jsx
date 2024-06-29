import React from "react";
import styled, { keyframes } from "styled-components";
import { FaHome, FaSearch, FaBell, FaUser } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

const BottomBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #000;
  padding: 10px 0;
  border-top: 1px solid #444;
  border-radius: 20px 20px 0 0;
  z-index: 1000;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #ff0055;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const TiktokButtonWrapper = styled.div`
  background: linear-gradient(to right, #00f2ea, #ff0055);
  border-radius: 50px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: white;
  cursor: pointer;

  &:hover {
    animation: ${rotate} 1s linear infinite;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const NavLabel = styled.span`
  font-size: 12px;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (max-width: 480px) {
    font-size: 8px;
  }
`;

const BottomBar = () => {
  return (
    <BottomBarContainer>
      <NavButton>
        <FaHome />
        <NavLabel>Home</NavLabel>
      </NavButton>
      <NavButton>
        <FaSearch />
        <NavLabel>Discover</NavLabel>
      </NavButton>
      <TiktokButtonWrapper>
        <IoIosAddCircle />
      </TiktokButtonWrapper>
      <NavButton>
        <FaBell />
        <NavLabel>Inbox</NavLabel>
      </NavButton>
      <NavButton>
        <FaUser />
        <NavLabel>Profile</NavLabel>
      </NavButton>
    </BottomBarContainer>
  );
};

export default BottomBar;
