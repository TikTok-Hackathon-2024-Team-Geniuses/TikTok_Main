import React from "react";
import styled from "styled-components";

function BoxModal({ toggleBar, isBarOpen }) {
  const Div = styled.div`
    height: 80vh; /* 80% of the viewport height */
    width: 100%; /* 100% of the viewport width */
    background-color: white;
    transform: translateY(20vh);
    border-radius: 30px 30px 0 0;
    z-index: 1;
  `;
  return (
    <Div className="modal">
      <button
        onClick={() => toggleBar()}
        className={!isBarOpen ? "btnhidden" : "btn"}
      >
        Closing Button
      </button>
      <div className="photoarea"></div>
      <div className="infoarea"></div>{" "}
      <div className="modalbuttons">
        <div>See All Details</div>
        <div>Add To Card////////</div>
      </div>
    </Div>
  );
}

export default BoxModal;