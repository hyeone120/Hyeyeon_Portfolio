import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import UsageBar from "./UsageBar";
import { codeString } from "./WmiData";
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
        <div className={styles.card}>
          <div className={styles.grid}>
            <div className={styles.left}>
              <div>
                <h3 className={styles.subTitle}>CPU</h3>
                <UsageBar label="CPU Usage" usage={cpu} />
              </div>

              <div>
                <h3 className={styles.subTitle}>Memory</h3>
                <UsageBar label="Memory Usage" usage={memory} />
              </div>
            </div>

            <div className={styles.right}>
              <h3 className={styles.subTitle}>Disk</h3>

              <div className={styles.diskRow}>
                <div className={styles.diskLabel}>Disk C</div>
                <UsageBar label="Disk C" usage={disks[0]} />
              </div>

              <div className={styles.diskRow}>
                <div className={styles.diskLabel}>Disk D</div>
                <UsageBar label="Disk D" usage={disks[1]} />
              </div>

              <div className={styles.diskRow}>
                <div className={styles.diskLabel}>Disk E</div>
                <UsageBar label="Disk E" usage={disks[2]} />
              </div>
            </div>
          </div>
        </div>

        <pre className={styles.code}>
          <code>{codeString}</code>
        </pre>
      </div>
    </div>
  );
};

export default MonitoringWmi;
