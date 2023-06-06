import React from "react";
import { Pie } from "react-chartjs-2";
import options from "../utils/options2";
import { ArcElement, Chart as ChartJS } from "chart.js";
ChartJS.register(ArcElement);
import styles from "./styles/pie.module.css";

const PieChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p>Top products</p>
        <select>
          <option>May - June 2023</option>
        </select>
      </div>
      <div className={styles.data}>
        <div className={styles.chart}>
          <Pie data={data} options={options} />
        </div>
        <div className={styles.labels}>
          <div className={styles.tickerss}>
            <div className={styles.ticker}>
              <div className={styles.one}></div>
              Basic Tees
            </div>
            <p>55%</p>
          </div>
          <div className={styles.tickerss}>
            <div className={styles.ticker}>
              <div className={styles.two}></div>
              Custom Short Pants
            </div>
            <p>31%</p>
          </div>
          <div className={styles.tickerss}>
            <div className={styles.ticker}>
              <div className={styles.three}></div>
              Super Hoodies
            </div>
            <p>55%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
