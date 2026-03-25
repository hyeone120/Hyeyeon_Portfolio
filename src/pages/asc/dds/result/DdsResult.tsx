import { Timeline } from "antd";
import { contributions, results } from "./result";
import { CheckCircleOutlined } from "@ant-design/icons";
import styles from "../Dds.module.scss";

const DdsResult = () => {
  return (
    <>
      <div>
        <h2 style={{ marginBottom: 30 }}>핵심 기여</h2>

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
        <h2 style={{ marginBottom: 30 }}>성과</h2>

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

export default DdsResult;
