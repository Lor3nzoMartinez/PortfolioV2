import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

function Peg({ pressed, title, id }) {
  console.log("ID: ", id);

  const PegFlat = styled.div`
    position: relative;
    margin: 50px;

    .top {
      position: absolute;
      width: 30px;
      height: 25px;

      background-color: #333;

      top: 10px;
      right: -15px;

      transition: 0.5s;
    }

    .icon-props {
      position: absolute;
      width: 30px;
      height: 30px;

      opacity: 0.4;

      top: -25px;
      right: 25px;
      transform: rotate(180deg);

      transition: 0.5s;
    }
  `;

  const Peg = styled.div`
    position: relative;
    margin: 50px;

    .top {
      position: absolute;
      width: 30px;
      height: 25px;

      background-color: #ff0057;
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);

      top: 10px;
      right: -15px;

      transition: 0.5s;
    }

    .pin-top {
      position: absolute;
      width: 15px;
      height: 15px;

      background-color: #000;
      border-radius: 50%;

      top: 15px;
      right: 0px;

      transition: 0.5s;
    }
  `;

  return (
    <div>
      {pressed ? (
        <Peg>
          <div id={`${id}`} className="pin-top" />
        </Peg>
      ) : (
        <PegFlat>
          <img
            id={`${id}`}
            className={`icon-props`}
            src="https://static.thenounproject.com/png/408355-200.png"
          />
        </PegFlat>
      )}
    </div>
  );
}

export default Peg;
