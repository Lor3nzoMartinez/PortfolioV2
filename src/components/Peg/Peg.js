import React from "react";
import styled from "styled-components";

function Peg({ pressed }) {
  const PegFlat = styled.div`
    position: relative;
    margin: 50px;

    .top {
      position: absolute;
      width: 70px;
      height: 25px;

      background-color: #666;

      padding-left: 5px;
      padding-right: 5px;

      border-radius: 2px;

      top: 10px;
      right: -15px;
    }

    .click-text {
      position: absolute;
      width: 70px;
      heigth: 20px;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      opacity: 0.5;

      white-space: nowrap;

      top: 12px;
      right: -9px;

      cursor: pointer;
    }
  `;

  const Peg = styled.div`
    position: relative;
    margin: 50px;

    .top {
      position: absolute;
      width: 70px;
      height: 25px;

      background-color: #666;

      padding-left: 5px;
      padding-right: 5px;

      border-radius: 2px;

      top: 3px;
      right: -15px;
    }

    .middle {
      position: absolute;
      width: 70px;
      height: 25px;

      background-color: #444;

      top: 6px;
      right: -15px;
    }

    .bottom {
      position: absolute;
      width: 80px;
      height: 25px;

      background-color: #444;

      border-radius: 2px;

      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.75);

      top: 10px;
      right: -15px;
    }

    .click-text {
      position: absolute;
      width: 70px;
      heigth: 20px;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      opacity: 0.5;

      white-space: nowrap;

      top: 5px;
      right: -9px;

      cursor: pointer;
    }
  `;

  return (
    <div>
      {pressed ? (
        <Peg>
          <div className="bottom" />
          <div className="middle" />
          <div className="top" />
          <div className="click-text">Click Me</div>
        </Peg>
      ) : (
        <PegFlat>
          <div className="bottom" />
          <div className="middle" />
          <div className="top" />
          <div className="click-text">Click Me</div>
        </PegFlat>
      )}
    </div>
  );
}

export default Peg;
