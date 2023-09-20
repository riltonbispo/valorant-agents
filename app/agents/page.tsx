import React from "react";
import { AgentType } from "@/types/agentType";
import Card from "../components/Card/card";
import style from "./page.module.css";

import axios from "axios";

async function getAgents() {
  try {
    const res = await axios.get(
      "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
    );
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
}

const page = async () => {
  const agents: AgentType[] = await getAgents();

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>Agentes Valorant</h1>
        <p className={style.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        </p>
        <ul className={style.list}>
          {agents.map((agent) => (
            <li key={agent.uuid} className={style.item}>
              <Card agent={agent}></Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
