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
      label: labels,
      fill: true,
      backgroundColor: ['#36A2EB', '#FF6384'],
      hoverBackgroundColor: ['#60A0E1', '#FF7F88'],
      borderColor: ['#36A2EB', '#FF6384'],
      offset: 40
    }
  ],
  };
  return <Doughnut style={{zIndex: 10}} data={data} options={DoughnutChartOptions} />;
};

export { DoughnutChart };