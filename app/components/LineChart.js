"use client";
import { useState, useEffect } from "react";
import Chart from "chart.js/auto";

export default function LineChart({ data }) {
  const [chartData, setChartData] = useState("Category");

  // Category Data
  const categoryData = () => {
    const rawData = data.category;
    const output = { labels: [], spentDatasets: [] };

    rawData.spent.spent.map((item) => {
      output.labels.push(item.label);
      output.spentDatasets.push(item.amount);
    });
    console.log("Category:");
    console.log(output);
    return output;
  };

  // Month Data
  const monthData = () => {
    const rawData = data.months;
    const output = { labels: [], spentDatasets: [], receivedDatasets: [] };

    rawData.spent.spent.map((item) => {
      output.labels.push(item.label);
      output.spentDatasets.push(item.amount);
    });

    if (chartData === "Month") {
      rawData.received?.received.map((item) => {
        output.receivedDatasets.push(item.amount);
      });
    }

    console.log("Month:");
    console.log(output);
    return output;
  };

  const settingData = () => {
    let newData;

    if (chartData === "Category") {
      newData = categoryData();
      console.log("New Data:");
      console.log(newData); // Here it is not empty. It's fine here.
    } else {
      newData = monthData();
    }

    const spentOutput = {
      labels: newData.labels,
      datasets: [
        {
          label: "Spent",
          data: newData.spentDatasets,
          fill: false,
          borderColor: "rgb(191, 9, 8)",
          tension: 0,
        },
      ],
    };

    const receivedOutput = {
      labels: newData.labels,
      datasets: [
        {
          label: "Received",
          data: newData.receivedDatasets,
          fill: false,
          borderColor: "rgb(2, 97, 24)",
          tension: 0,
        },
      ],
    };

    const bothOutput = {
      labels: newData.labels,
      datasets: [
        {
          label: "Spent",
          data: newData.spentDatasets,
          fill: false,
          borderColor: "rgb(191, 9, 8)",
          tension: 0,
        },
        {
          label: "Received",
          data: newData.receivedDatasets,
          fill: false,
          borderColor: "rgb(2, 97, 24)",
          tension: 0,
        },
      ],
    };

    if (chartData === "Category") {
      console.log("Final Spent output:");
      console.log(spentOutput); // At this point the data array in datasets is not empty.
      return spentOutput;
    } else {
      console.log("Final:");
      console.log(bothOutput);
      return bothOutput;
    }
  };

  const finalData = settingData();

  useEffect(() => {
    const chartOptions = {
      type: "line",
      data: finalData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Chart.js Line Chart",
          },
        },
      },
    };

    const ctx = document.getElementById("lineChart");
    const existingChart = Chart.getChart(ctx);

    if (existingChart) {
      existingChart.destroy();
    }

    new Chart(ctx, chartOptions);
  }, [finalData]);

  return (
    <div className=" w-3/4">
      <button
        className=" py-2 px-4 rounded-lg bg-primary-color text-white font-bold"
        onClick={() => {
          let temp = chartData === "Category" ? "Month" : "Category";
          console.log(chartData);
          setChartData(temp);
        }}
      >
        Change
      </button>
      <canvas className="p-4" id="lineChart"></canvas>
    </div>
  );
}
