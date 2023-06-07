import React from "react";
import styles from "./styles/header.module.css";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import bell from "../public/bell.png";
import { FaPowerOff } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

const Header = ({ data }) => {
  const handleSignout = () => {
    signOut();
    redirect("/");
  };
  return (
    <div className={styles.header}>
      <div className={styles.Head}>Dashboard</div>
      <div className={styles.info}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search ..." />
          <CiSearch />
        </div>
        <Image src={bell} alt="" />
        <FaPowerOff
          style={{ width: "20px", height: "20px", cursor: "pointer" }}
          onClick={handleSignout}
        />
        <Image
          src={data?.user?.image}
          alt=""
          width="20"
          height={20}
          className={styles.Therd}
        />
      </div>
    </div>
  );
};

export default Header;
