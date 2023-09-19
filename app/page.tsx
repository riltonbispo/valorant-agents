"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Valorant Agents Wiki</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta delectus
        fuga possimus natus laudantium eveniet expedita in nostrum reprehenderit
        rerum. Atque non quod modi hic explicabo sint nam nesciunt facilis?
      </p>
      <Link href="/agents">Ver Agents</Link>
    </div>
  );
}
