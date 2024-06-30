import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Generate random data for demonstration
const generateData = (length) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 100));
};

// Function to aggregate data by averaging chunks
const aggregateData = (data, chunkSize) => {
  const aggregatedData = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    const chunkSum = chunk.reduce((acc, val) => acc + val, 0);
    const chunkAvg = chunkSum / chunk.length;
    aggregatedData.push(chunkAvg);
  }
  return aggregatedData;
};

// Data for the first graph with 2 datasets
const originalData1 = generateData(96);
const originalData2 = generateData(96);
const chunkSize = 4; // Aggregate by groups of 4

const data1 = {
  labels: Array.from({ length: 96 / chunkSize }, (_, i) => i + 1),
  datasets: [
    {
      label: "Dataset 1",
      data: aggregateData(originalData1, chunkSize),
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
    },
    {
      label: "Dataset 2",
      data: aggregateData(originalData2, chunkSize),
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      fill: true,
    },
  ],
};

// Data for the second graph with a single dataset
const originalData3 = generateData(96);

const data2 = {
  labels: Array.from({ length: 96 / chunkSize }, (_, i) => i + 1),
  datasets: [
    {
      label: "Dataset 3",
      data: aggregateData(originalData3, chunkSize),
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      fill: true,
    },
  ],
};

export default function Charts2() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="p-3 ">
            <Line data={data1} options={{ responsive: true }} />
          </div>
        </div>
        <div className="col">
          <div className="p-3 ">
            <Line data={data2} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
}
