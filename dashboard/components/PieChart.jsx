import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import options from "../utils/options2";
import { ArcElement, Chart as ChartJS } from "chart.js";
ChartJS.register(ArcElement);
import styles from "./styles/pie.module.css";
import axios from "axios";

const PieChart = () => {
  const [Items, setItems] = useState({});
  const getData = async () => {
    let {
      data: { data },
    } = await axios.get("/api/products");
    const chartData = data.reduce((acc, item) => {
      if (acc[item.category]) {
        acc[item.category]++;
      } else {
        acc[item.category] = 1;
      }
      return acc;
    });
    delete chartData["_id"];
    delete chartData["id"];
    delete chartData["category"];

    setItems({ ...chartData });
  };

  useEffect(() => {
    getData();
  }, []);

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
          <Pie
            data={{
              labels: Object.keys(Items),
              datasets: [
                {
                  data: Object.values(Items),
                  backgroundColor: ["#98d89e", "#f6dc7d", "#ee8484"],
                  hoverBackgroundColor: ["#98d89e", "#f6dc7d", "#ee8484"],
                },
              ],
            }}
            options={options}
          />
        </div>
        <div className={styles.labels}>
          <div className={styles.tickerss}>
            <div className={styles.ticker}>
              <div className={styles.one}></div>
              Basic Tees
            </div>
            <p>{((Items["Basic Tees"] / 1000) * 100).toFixed(2)}%</p>
          </div>
          <div className={styles.tickerss}>
            <div className={styles.ticker}>
              <div className={styles.two}></div>
              Custom Short Pants
            </div>
            <p>{((Items["Custom Short Pants"] / 1000) * 100).toFixed(2)}%</p>
          </div>
          <div className={styles.tickerss}>
            <div className={styles.ticker}>
              <div className={styles.three}></div>
              Super Hoodies
            </div>
            <p>{((Items["Super Hoodies"] / 1000) * 100).toFixed(2)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
