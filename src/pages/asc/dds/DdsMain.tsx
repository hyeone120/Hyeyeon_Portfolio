import { Anchor } from "antd";
import React from "react";
import DdsStructure from "./structure/DdsStructure";
import DdsResult from "./result/DdsResult";
import styles from "./Dds.module.scss";
import DdsFunction from "./function/DdsFunction";

const DdsMain = () => {
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
              key: "ddsFunction",
              href: "#ddsFunction",
              title: "핵심 기능",
            },
            {
              key: "ddsStructure",
              href: "#ddsStructure",
              title: "자료배포시스템 구조",
            },
            {
              key: "ddsResult",
              href: "#ddsResult",
              title: "결과 및 성과",
            },
          ]}
        />
      </div>
      <div>
        <div id="ddsFunction" className={styles.section}>
          <DdsFunction />
        </div>
        <div id="ddsStructure" className={styles.section}>
          <DdsStructure />
        </div>
        <div id="ddsResult" className={styles.section}>
          <DdsResult />
        </div>
      </div>
    </>
  );
};

export default DdsMain;
