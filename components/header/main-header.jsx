import Link from "next/link";
import Image from "next/image";
import React from "react";

import HeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image src={logoImg} alt="Food Logo" priority /> NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Browse Meal</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
