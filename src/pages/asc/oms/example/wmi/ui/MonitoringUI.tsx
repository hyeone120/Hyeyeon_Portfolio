import UsageBar from "./UsageBar";
import styles from "../MonitoringWmi.module.scss";

interface Props {
  cpu: number;
  memory: number;
  disks: number[];
}

const MonitoringUI = ({ cpu, memory, disks }: Props) => {
  return (
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
  );
};

export default MonitoringUI;
