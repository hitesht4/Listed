import React from "react";
import styles from "./styles/dashboard.module.css";
import { AiOutlinePieChart } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCalendar4 } from "react-icons/bs";
import transaction from "../public/navigation/one.png";
import settings from "../public/navigation/two.png";
import Image from "next/image";
import Header from "./Header";
import Cards from "./Cards";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import Last from "./Last";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Loader from "./Loader";

const Dashboard = () => {
  const { status: session, data } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });

  if (session === "loading") {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <div className={styles.navigation}>
          <div className={styles.heading}>
            <h2>Board.</h2>
          </div>
          <div className="flex">
            <ul className={styles.Links}>
              <li>
                <AiOutlinePieChart /> Dashboard
              </li>
              <li>
                <Image src={transaction} alt="" /> Transactions
              </li>
              <li>
                <BsCalendar4 /> Schedules
              </li>
              <li>
                <HiOutlineUserCircle /> Users
              </li>
              <li>
                <Image src={settings} alt="" /> Settings
              </li>
            </ul>
            <ul className={styles.Links2}>
              <li>Help</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className={styles.contents}>
          <Header data={data} />
          <Cards />
          <LineChart />
          <div className={styles.options}>
            <PieChart />
            <Last />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
