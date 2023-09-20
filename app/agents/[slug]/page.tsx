"use client";

import { getUnicAgent } from "@/services/api";
import { AgentType } from "@/types/agentType";
import React, { useEffect, useState } from "react";

import style from "./page.module.css";

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
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.info}>
          <h2 className={style.info__title}>{agent?.displayName}</h2>
          <p className={style.info__description}> {agent?.description}</p>
        </div>

        <div className={style.abilites}>
          {agent?.abilities.map((abilite) => (
            <div className={style.abilite__container}>
              <img
                src={abilite.displayIcon}
                alt=""
                className={style.abilite__image}
              />
              <div className={style.abilite__body}>
                <h4 className={style.abilite__title}>{abilite.displayName}</h4>
                <p className={style.abilite__description}>
                  {abilite.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={style.image}>
        <img src={agent?.fullPortrait} alt="" />
      </div>
    </div>
  );
};

export default Agent;
