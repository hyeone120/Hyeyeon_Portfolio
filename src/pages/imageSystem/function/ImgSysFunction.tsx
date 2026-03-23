import { functions } from "./functionData";
import styles from "../ImageSystem.module.scss";

const ImgSysFunction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>핵심 기능</h2>

      <div className={styles.cardWrapper}>
        {functions.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3>{item.title}</h3>
            <ul>
              {item.desc.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgSysFunction;
