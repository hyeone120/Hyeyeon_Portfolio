import { Bar } from "react-chartjs-2";
import {
  codeString,
  labels,
  statusFailed,
  statusRegistered,
  statusSuccess,
} from "./ChartData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./MonitoringChart.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const MonitoringChart = () => {
  const data = {
    labels: labels.map((date) => date.slice(5, 7) + "월"),
    datasets: [
      {
        label: "등록",
        data: statusRegistered,
        backgroundColor: "#60A5FA",
      },
      {
        label: "성공",
        data: statusSuccess,
        backgroundColor: "#34D399",
      },
      {
        label: "실패",
        data: statusFailed,
        backgroundColor: "#FBBF24",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "월별 상태값 모니터링",
        font: { size: 18 },
      },
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };

  return (
    <>
      <h2 className={styles.title}>예시</h2>
      <div className={styles.container}>
        <h2>차트 시각화 구현</h2>
        <div className={styles.wrapperColumn}>
          <div className={styles.chart}>
            <Bar data={data} options={options} />
          </div>

          <pre className={styles.code}>
            <code>{codeString}</code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default MonitoringChart;
