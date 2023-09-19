"use client";
import React, { useEffect, useState } from "react";
import { getAgents } from "@/services/api";
import { AgentType } from "@/types/agentType";
import Card from "../components/Card";

const page = () => {
  const [agents, setAgents] = useState<AgentType[]>([]);

  useEffect(() => {
    getAgents()
      .then((data) => {
        setAgents(data);
      })
      .catch((err) => console.log("Error", err));
  }, []);

  return (
    <div>
      <h1>Agentes Valorant</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore</p>
      <ul>
        {agents.map((agent) => (
          <li key={agent.uuid}>
            <Card agent={agent}></Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
