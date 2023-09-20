import React from "react";
import Link from "next/link";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style.container}>
      <nav className={style.content}>
        <ul className={style.list}>
          <li className={style.item}>
            <Link href="/" className={style.link}>
              Home
            </Link>
          </li>
          <li className={style.item}>
            <Link href="/agents" className={style.link}>
              Agents
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
