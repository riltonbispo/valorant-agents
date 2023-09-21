import { AgentType } from "@/types/agentType";
import React from "react";


import * as C from "./UnicAgent.style";

import axios from "axios";

async function getAgent(id: string) {
  try {
    const res = await axios.get(`https://valorant-api.com/v1/agents/${id}`);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
}

const Agent = async ({ params }: { params: { slug: string } }) => {
  const agent: AgentType = await getAgent(params.slug);

  return (
    <C.Container imageUrl={agent.fullPortrait}>
      <C.Content>
        <C.Info>
          <C.InfoTitle>{agent?.displayName}</C.InfoTitle>
          <C.InfoDescription>{agent?.description}</C.InfoDescription>
        </C.Info>

        <C.Abilities>
          {agent?.abilities.map((abilite) => (
            <C.AbilityContainer>
              <C.AbilityImage src={abilite.displayIcon} alt="" />
              <C.AbilityBody>
                <C.AbilityTitle>{abilite.displayName}</C.AbilityTitle>
                <C.AbilityDescription>
                  {abilite.description}
                </C.AbilityDescription>
                <hr />
              </C.AbilityBody>
            </C.AbilityContainer>
          ))}
        </C.Abilities>
      </C.Content>

      <C.Image src={agent?.fullPortrait} alt="" />
    </C.Container>
  );
};

export default Agent;
