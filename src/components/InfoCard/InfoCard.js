import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Peg from "../Peg/Peg";
import "./InfoCard.scss";

export default function InfoCard({ title, icon, content, id }) {
  const [pressed, setPressed] = useState(false);
  const toggle = () => setPressed(!pressed);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function serveClick() {
    if (pressed) {
      document.getElementById(`${id}`).className = "push-pin-out";
      await sleep(300);
      toggle();
    } else {
      document.getElementById(`${id}`).className = "push-pin-in";
      await sleep(275);
      toggle();
    }
  }

  return (
    <>
      <div onClick={(e) => serveClick()} className="info-card">
        <div className={`${pressed ? "card-face-toggle" : "card-face"}`}>
          <div className="peg-container">
            <Peg pressed={pressed} title={title} id={id} />
          </div>
          <div>
            {icon.length ? (
              <img
                className="content img-props"
                src={`${icon}`}
                alt={`${title} picture`}
              />
            ) : (
              <FontAwesomeIcon
                className="content"
                size="10x"
                inverse
                icon={icon}
              />
            )}
          </div>
          <div>
            <h3 className="content">{title}</h3>
          </div>
        </div>

        <div className={`${pressed ? "card-data-toggle" : "card-data"}`}>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}
