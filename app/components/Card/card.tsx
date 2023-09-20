import { AgentType } from "@/types/agentType";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import style from "./card.module.css";

const Card = ({ agent }: { agent: AgentType }) => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Link href={`agents/${agent.uuid}`}>
          <Image
            src={agent.fullPortrait}
            height={1000}
            width={1000}
            alt=""
            className={style.image}
          />
        </Link>
        <div className={style.info}>
          <h3 className={style.title}>{agent.displayName}</h3>
          <span className={style.details}>{agent.role.displayName}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
