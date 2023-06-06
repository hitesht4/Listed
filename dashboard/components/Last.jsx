import React from "react";
import styles from "./styles/last.module.css";

const Last = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p>Today’s schedule</p>
        <select>
          <option>see all</option>
        </select>
      </div>
      <div className={styles.contents}>
        <div className={styles.item}>
          <div className={styles.rotate}></div>
          <div>
            <p>Meeting with suppliers from Kuta Bali</p>
            <p>14.00-15.00</p>
            <p>at Sunset Road, Kuta, Bali </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.rotate}></div>
          <div>
            <p>Check operation at Giga Factory 1</p>
            <p>18.00-20.00</p>
            <p>at Central Jakarta </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
