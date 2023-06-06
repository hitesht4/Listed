import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import axios from "axios";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);
import styles from "./styles/line.module.css";
import options from "../utils/options";

const LineChart = () => {
  const [userSet, setUserSet] = useState([]);
  const [guestSet, setGuestSet] = useState([]);
  const [labels, setLabels] = useState([]);
  const getData = async () => {
    let {
      data: { data },
    } = await axios.get("/api/users");
    let o = {};
    let user = { 1: 0, 2: 0, 3: 0, 4: 0 };
    let guest = { 1: 0, 2: 0, 3: 0, 4: 0 };
    for (let i = 0; i < data.length; i++) {
      let x = data[i].Week;
      let c = data[i].category;
      if (o[x] === undefined) {
        o[x] = `Week ${x}`;
      }
      if (c === "user") {
        user[x] = user[x] + 1;
      } else {
        guest[x] = guest[x] + 1;
      }
    }

    setUserSet(Object.values(user));
    setGuestSet(Object.values(guest));
    setLabels(Object.values(o));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.Labels}>
        <div>
          <p>Activities</p>
          <select>
            <option>May - June 2023</option>
          </select>
        </div>
        <div className={styles.tickers}>
          <div className={styles.ticker}>
            <div></div>
            Guest
          </div>
          <div className={styles.ticker}>
            <div></div>
            User
          </div>
        </div>
      </div>
      <div className={styles.chart}>
        <Line
          style={{ height: "100%", width: "100%" }}
          data={{
            labels: labels,
            datasets: [
              {
                label: "Users",
                data: [...userSet],
                fill: false,
                borderColor: "#9BDD7C",
                tension: 0.4,
              },
              {
                label: "Guests",
                data: [...guestSet],
                fill: false,
                borderColor: "#E9A0A0",
                tension: 0.4,
              },
            ],
          }}
          options={options}
        />
      </div>
    </div>
  );
};

export default LineChart;
