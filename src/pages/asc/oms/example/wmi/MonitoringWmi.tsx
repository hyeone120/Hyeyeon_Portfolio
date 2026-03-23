import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import CodeTabs from "./code/CodeTabs";
import MonitoringUI from "./ui/MonitoringUI";
import styles from "./MonitoringWmi.module.scss";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const MonitoringWmi = () => {
  const [cpu, setCpu] = useState(50);
  const [memory, setMemory] = useState(40);
  const [disks, setDisks] = useState([30, 60, 80]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(Math.floor(Math.random() * 100));
      setMemory(Math.floor(Math.random() * 100));
      setDisks([
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.exTitle}>실시간 서버 모니터링</h2>

      <div className={styles.background}>
        <MonitoringUI cpu={cpu} memory={memory} disks={disks} />
        <CodeTabs />
      </div>
    </div>
  );
};

export default MonitoringWmi;
