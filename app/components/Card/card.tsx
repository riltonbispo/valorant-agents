import { AgentType } from "@/types/agentType";
import React from "react";
import Link from "next/link";
import * as C from "./Card.style";

const Card = ({ agent }: { agent: AgentType }) => {
  return (
    <C.Container>
      <C.Content>
        <Link href={`agents/${agent.uuid}`}>
          <C.Image
            src={agent.fullPortrait}
            alt=""
            $bgColor={agent.backgroundGradientColors[0]}
          />
        </Link>
        <C.Info $bgColor={agent.backgroundGradientColors[3]}>
          <C.Title>{agent.displayName}</C.Title>
          <C.Details>{agent.role.displayName}</C.Details>
        </C.Info>
      </C.Content>
    </C.Container>
  );
};

export default Card;
