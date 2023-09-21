import React from "react";
import { AgentType } from "@/types/agentType";
import Card from "../components/Card/card";
import * as C from "./Agents.style";

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
    <C.Container>
      <C.Content>
        <C.Title>Agentes Valorant</C.Title>
        <C.Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        </C.Description>
        <C.List>
          {agents.map((agent) => (
            <React.Fragment key={agent.uuid}>
              <C.Item>
                <Card agent={agent}></Card>
              </C.Item>
            </React.Fragment>
          ))}
        </C.List>
      </C.Content>
    </C.Container>
  );
};

export default page;
