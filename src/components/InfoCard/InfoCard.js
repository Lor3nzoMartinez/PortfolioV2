import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import pic from "../../media/code_128.png";

import Peg from "../Peg/Peg";

import "./InfoCard.css";

export default function InfoCard({ title, icon, content }) {
  const [pressed, setPressed] = useState(false);
  const toggle = () => setPressed(!pressed);

  console.log("icon: ", icon);
  console.log("icon desired: ", faIdBadge);

  return (
    <>
      <div className="info-card">
        <div
          className={`${pressed ? "card-face-toggle" : "card-face"}`}
          onClick={() => toggle()}
        >
          <div className="peg-container">
            <Peg pressed={pressed} />
          </div>
          <div>
            <FontAwesomeIcon
              className="content"
              size="7x"
              inverse
              icon={icon}
            />
            {/* <img src="../../media/code_128.png" /> */}
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
