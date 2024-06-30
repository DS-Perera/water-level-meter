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

// Data for the first graph with 2 datasets
const data1 = {
  labels: Array.from({ length: 96 }, (_, i) => i + 1),
  datasets: [
    {
      label: "Dataset 1",
      data: generateData(96),
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
    },
    {
      label: "Dataset 2",
      data: generateData(96),
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      fill: true,
    },
  ],
};

// Data for the second graph with a single dataset
const data2 = {
  labels: Array.from({ length: 96 }, (_, i) => i + 1),
  datasets: [
    {
      label: "Dataset 3",
      data: generateData(96),
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      fill: true,
    },
  ],
};


export default function Charts1() {
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
