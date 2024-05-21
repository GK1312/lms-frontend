"use client";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"bar"> = {
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: true,
      position: "top",
      align: "start",
      labels: {
        boxWidth: 18,
        boxHeight: 18,
        useBorderRadius: true,
        borderRadius: 3.5,
        padding: 20,
        font: {
          size: 14,
          family: "Poppins",
        },
        color: "#333",
      },
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      ticks: {
        callback: function (value: number | string) {
          return `${value}h`;
        },
        stepSize: 20,
      },
    },
  },
  layout: {},
};
const data: ChartData<"bar"> = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Study",
      data: [38, 20, 60, 36, 16],
      backgroundColor: "#ff9053",
    },
    {
      label: "Exam",
      data: [20, 12, 4, 10, 4],
      backgroundColor: "#f8efe2",
    },
    {
      label: "Quiz",
      data: [6, 8, 3, 4, 2],
      backgroundColor: "#e1e2f6",
    },
  ],
};

export default function Home() {
  return (
    <>
      <h1 className="text-3xl text-main-text leading-normal font-bold font-poppins">
        Hello, Gaurav Kadam
      </h1>
      <p className="text-lg text-main-text font-medium">
        Let’s learn something new today!
      </p>
      <div className="flex flex-wrap">
        <div className="w-7/12">
          <div className="flex flex-wrap">
            <div className="w-7/12">
              <Bar options={options} data={data} />
            </div>
            <div className="w-5/12"></div>
          </div>
        </div>
        <div className="w-5/12"></div>
      </div>
    </>
  );
}
