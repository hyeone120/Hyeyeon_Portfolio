import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import CodeTabs from "./code/CodeTabs";
import {
  labels,
  statusFailed,
  statusRegistered,
  statusSuccess,
} from "./code/ChartData";
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
      <section className={styles.section}>
        <h2 className={styles.title}>차트 시각화 구현</h2>

        <div className={styles.card}>
          <div className={styles.chartArea}>
            <Bar data={data} options={options} />
          </div>

          <div className={styles.exampleHeader}>구현 코드 예시</div>

          <div className={styles.codeArea}>
            <CodeTabs />
          </div>
        </div>
      </section>
    </>
  );
};

export default MonitoringChart;
