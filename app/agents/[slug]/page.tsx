"use client";

import { getUnicAgent } from "@/services/api";
import { AgentType } from "@/types/agentType";
import React, { useEffect, useState } from "react";

const Agent = ({ params }: { params: { slug: string } }) => {
  const [agent, setAgent] = useState<AgentType | null>(null);

  useEffect(() => {
    getUnicAgent(params.slug)
      .then((data) => {
        setAgent(data);
      })
      .catch((err) => console.log("Error", err));
  }, []);

  return (
    <div>
      <div>
        <h2>{agent?.displayName}</h2>
        <p>{agent?.description}</p>
      </div>
      <div>
        <img src={agent?.fullPortrait} alt="" />
      </div>
      <div>
        {agent?.abilities.map((abilite) => (
          <div>
            <img src={abilite.displayIcon} alt="" />
            <h4>{abilite.displayName}</h4>
            <p>{abilite.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agent;
