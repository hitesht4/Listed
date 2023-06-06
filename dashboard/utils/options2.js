const options = {
  tooltips: {
    callbacks: {
      label: (tooltipItem, data) => {
        const dataset = data.datasets[tooltipItem.datasetIndex];
        const total = dataset.data.reduce(
          (previousValue, currentValue) => previousValue + currentValue
        );
        const currentValue = dataset.data[tooltipItem.index];
        const percentage = ((currentValue / total) * 100).toFixed(2) + "%";
        return `${data.labels[tooltipItem.index]}: ${percentage}`;
      },
    },
  },
};

export default options;
