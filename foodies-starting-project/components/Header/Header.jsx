import Link from "next/link";

import LogoImage from "@/assets/logo.png";
import classes from "./header.module.css";
import Image from "next/image";
import MainBackground from "../MainBackground/MainBackground";
import NavLink from "../NavLink/NavLink";

const Header = () => {
  return (
    <>
      <MainBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={LogoImage} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="meals">Meals</NavLink>
            </li>
            <li>
              <NavLink href="community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
