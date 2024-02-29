import Link from "next/link";
import Image from "next/image";
import React from "react";

import HeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";

function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link href={"/"} className={styles.logo}>
          <Image src={logoImg} alt="Food Logo" priority /> NextLevel Food
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
    </>
  );
}

export default Header;
