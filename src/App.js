import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import InfoCard from "./components/InfoCard/InfoCard";
import CardData from "./data/CardData.json";

import "./App.scss";

library.add(fab, fas);

function App() {
  const cards = [...CardData.cards];

  return (
    <body>
      <div className="info-container">
        <h1>Lorenzo Martinez</h1>
      </div>
      <div className="card-container">
        {cards.map((data) => (
          <InfoCard
            title={data.title}
            id={data.id}
            icon={data.icon}
            content={data.content}
          />
        ))}
      </div>
      <div className="social-container">
        <a
          href="https://github.com/Lor3nzoMartinez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="social"
            size="4x"
            inverse
            icon={["fab", "github"]}
          />
        </a>
        <a
          href="https://gitlab.com/Lor3nzoMartinez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="social"
            size="4x"
            inverse
            icon={["fab", "gitlab"]}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/lorenzo-martinez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="social"
            size="4x"
            inverse
            icon={["fab", "linkedin"]}
          />
        </a>
        <a
          href="https://www.instagram.com/lorenzo.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="social"
            size="4x"
            inverse
            icon={["fab", "instagram"]}
          />
        </a>
      </div>
    </body>
  );
}

export default App;
