// import React from "react";
// import styled from "styled-components";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import "../../styles/ActionButtons.css";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const ActionButtons = () => {
  const [isClicked, setIsClicked] = useState(false);

  const ModalPart = () => {
    return (
      <div className={`modal__container ${isClicked ? "show" : "hide"}`}>
        <IoCloseSharp
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        />
        <h1>AI</h1>
        <p></p>
      </div>
    );
  };

  return (
    <>
      <ModalPart />
      <div className="action__button__container">
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
      </div>
    </>
  );
};

export default ActionButtons;