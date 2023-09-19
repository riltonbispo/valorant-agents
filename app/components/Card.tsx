import { AgentType } from "@/types/agentType";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ agent }: { agent: AgentType }) => {
  return (
    <div>
      <div>
        <Link href={`agents/${agent.uuid}`}>
          <div className="hover:cursor-pointer flex justify-center items-center">
            <Image src={agent.displayIcon} height={100} width={100} alt="" />
          </div>
        </Link>
        <h3>{agent.displayName}</h3>
        <span>{agent.role.displayName}</span>
      </div>
    </div>
  );
};

export default Card;
