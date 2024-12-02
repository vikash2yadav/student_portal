import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJs,
  Tooltip,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
} from "chart.js";
import { orange, purple } from "@mui/material/colors";

ChartJs.register(
  Tooltip,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend
);

const DoughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
  },
  cutout: 120,
};

const DoughnutChart = ({value, labels}) => {
  const data = {
    labels,
    datasets: [{
      data: value,
      label: "Total Chats vs Group Chats",
      fill: true,
      backgroundColor: ['purple', 'orange'],
      hoverBackgroundColor: ['purple', 'orange'],
      borderColor: ['purple', 'orange'],
      offset: 40
    }
  ],
  };
  return <Doughnut style={{zIndex: 10}} data={data} options={DoughnutChartOptions} />;
};

export { DoughnutChart };
