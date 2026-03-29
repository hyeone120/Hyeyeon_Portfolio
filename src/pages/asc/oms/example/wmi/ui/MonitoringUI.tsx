import UsageBar from "./UsageBar";
import styles from "../MonitoringWmi.module.scss";

interface Props {
  cpu: number;
  memory: number;
  disks: number[];
}

const MonitoringUI = ({ cpu, memory, disks }: Props) => {
  return (
    <div className={styles.monitoring}>
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

          {["C", "D", "E"].map((disk, i) => (
            <div key={disk} className={styles.diskRow}>
              <div className={styles.diskLabel}>Disk {disk}</div>
              <UsageBar label={`Disk ${disk}`} usage={disks[i]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonitoringUI;
