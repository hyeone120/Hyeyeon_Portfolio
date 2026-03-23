import { contributions, results } from "./result";
import { Timeline } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import styles from "../Oms.module.scss";

const OmsResult = () => {
  return (
    <>
      <div>
        <h2 className={styles.title}>핵심 기여</h2>

        <Timeline mode="left">
          {contributions.map((item, index) => (
            <Timeline.Item key={index}>
              <b>{item.title}</b>
              <p style={{ margin: 0 }}>{item.desc}</p>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
      <div style={{ marginTop: 60 }}>
        <h2 className={styles.title}>성과</h2>

        <ul className={styles.resultList}>
          {results.map((item, index) => (
            <li key={index}>
              <CheckCircleOutlined
                style={{ color: "#429f6b", marginRight: 8 }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default OmsResult;
