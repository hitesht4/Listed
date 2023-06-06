const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          family: "Lato",
          size: 14,
          weight: 400,
          color: "#EAEAEA",
        },
        offset: -10,
      },
    },
    y: {
      grid: {
        color: "#EAEAEA",
      },
      ticks: {
        font: {
          family: "Lato",
          size: 14,
          weight: 400,
          color: "#EAEAEA",
        },
        callback: function (value) {
          return value.toLocaleString();
        },
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          family: "Lato",
          size: 14,
          weight: 400,
        },
      },
    },
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  },
};

export default options;
