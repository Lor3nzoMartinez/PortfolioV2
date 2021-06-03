import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";

import InfoCard from "./components/InfoCard/InfoCard";
import CardData from "./data/CardData.json";

import "./App.css";

function App() {
  const cards = [...CardData.cards];
  console.log(cards);

  return (
    <body>
      <div className="container">
        {cards.map((data) => (
          <InfoCard
            title={data.title}
            icon={data.icon}
            content={data.content}
          />
        ))}
      </div>
    </body>
  );
}

export default App;
