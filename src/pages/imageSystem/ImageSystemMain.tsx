import SkillTool from "./skillTool/SkillTool";
import Structure from "./structure/Structure";
import { Anchor } from "antd";
import ImgSysFunction from "./function/ImgSysFunction";
import ImgSysResult from "./result/ImgSysResult";
import styles from "./ImageSystem.module.scss";

const ImageSystemMain = () => {
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
              key: "skill-tool",
              href: "#skill-tool",
              title: "기술 및 구조",
            },
            {
              key: "imgSysFunction",
              href: "#imgSysFunction",
              title: "핵심 기능",
            },
            {
              key: "structure",
              href: "#structure",
              title: "시스템 구조",
            },
            {
              key: "imgSysResult",
              href: "#imgSysResult",
              title: "결과 및 성과",
            },
          ]}
        />
      </div>
      <div>
        <div id="skill-tool" className={styles.section}>
          <SkillTool />
        </div>
        <div id="imgSysFunction" className={styles.section}>
          <ImgSysFunction />
        </div>
        <div id="structure" className={styles.section}>
          <Structure />
        </div>
        <div id="imgSysResult" className={styles.section}>
          <ImgSysResult />
        </div>
      </div>
    </>
  );
};

export default ImageSystemMain;
