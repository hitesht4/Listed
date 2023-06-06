import React from "react";
import cash from "../public/cash.png";
import trx from "../public/trx.png";
import like from "../public/like.png";
import person from "../public/person.png";
import styles from "./styles/card.module.css";
import Image from "next/image";

const cards = [
  {
    title: "Total Revenues",
    color: "#DDEFE0",
    icon: cash,
    value: "$2,129,430",
  },
  { title: "Total Transactions", color: "#F4ECDD", icon: trx, value: "1,520" },
  { title: "Total Likes", color: "#EFDADA", icon: like, value: "9,721" },
  { title: "Total Users", color: "#DEE0EF", icon: person, value: "892" },
];

const Cards = () => {
  return (
    <div className={styles.Cards}>
      {cards.map((item, index) => {
        return (
          <div
            className={styles.card}
            style={{ background: item.color }}
            key={index}
          >
            <div className={styles.image}>
              <div>
                <Image src={item.icon} alt="" />
              </div>
            </div>
            <div className={styles.details}>
              <p>{item.title}</p>
              <p>{item.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
