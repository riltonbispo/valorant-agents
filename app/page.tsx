"use client";
import React from "react";
import Link from "next/link";
import style from "./page.module.css";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>Valorant Agents</h1>
        <p className={style.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          delectus fuga possimus natus laudantium eveniet expedita in nostrum
          reprehenderit rerum. Atque non quod modi hic explicabo sint nam
          nesciunt facilis?
        </p>
        <Link href="/agents" className={style.link}>
          Ver Agents
        </Link>
      </div>
    </div>
  );
}
