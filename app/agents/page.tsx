"use client";
import React, { useEffect, useState } from "react";
import { getAgents } from "@/services/api";
import { AgentType } from "@/types/agentType";
import Card from "../components/Card/card";
import style from "./page.module.css";

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
