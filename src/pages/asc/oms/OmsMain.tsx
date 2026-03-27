import { Anchor } from "antd";
import OmsStructure from "./structure/OmsStructure";
import OmsResult from "./result/OmsResult";
import OmsFunction from "./function/OmsFunction";
import MonitoringWmi from "./example/wmi/MonitoringWmi";
import MonitoringChart from "./example/statistic/MonitoringChart";
import styles from "./Oms.module.scss";

const OmsMain = () => {
  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0,
          background: "#fff",
          zIndex: 10,
        }}
      >
        <Anchor
          direction="horizontal"
          targetOffset={80}
          getContainer={() =>
            document.querySelector(".ant-layout-content") as HTMLElement
          }
          items={[
            {
              key: "omsFunction",
              href: "#omsFunction",
              title: "핵심 기능",
            },
            {
              key: "omsStructure",
              href: "#omsStructure",
              title: "운영관리시스템 구조",
            },
            {
              key: "monitoringChart",
              href: "#monitoringChart",
              title: "예시",
            },
            {
              key: "omsResult",
              href: "#omsResult",
              title: "결과 및 성과",
            },
          ]}
        />
      </div>
      <div>
        <div id="omsFunction" className={styles.section}>
          <OmsFunction />
        </div>
        <div id="omsStructure" className={styles.section}>
          <OmsStructure />
        </div>
        <div id="monitoringChart" className={styles.section}>
          <MonitoringChart />
          <MonitoringWmi />
        </div>
        <div
          id="omsResult"
          className={styles.section}
          style={{ minHeight: "40vh" }}
        >
          <OmsResult />
        </div>
      </div>
    </>
  );
};

export default OmsMain;
