import Link from "next/link";
import React from "react";

import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.logo}>
        <img src={logoImg.src} alt="Food Logo" /> NextLevel Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href={"/meals"}>Browse Meal</Link>
          </li>
          <li>
            <Link href={"/community"}>Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
