import React, { useState } from "react";
import styles from "./styles/header.module.css";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import bell from "../public/bell.png";
import { useSession } from "next-auth/react";
import profile from "../public/profile.png";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.header}>
      <div className={styles.Head}>Dashboard</div>
      <div className={styles.info}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search ..." />
          <CiSearch />
        </div>
        <Image src={bell} alt="" />
        <Image src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
