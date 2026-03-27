import { Anchor } from "antd";
import Structure from "./structure/Structure";
import AscSkillTool from "./skillTool/AscSkillTool";

const IntroduceAsc = () => {
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
              title: "기술 및 도구",
            },
            {
              key: "structure",
              href: "#structure",
              title: "시스템 구조",
            },
          ]}
        />
      </div>
      <div>
        <div
          id="skill-tool"
          style={{
            width: "100%",
            height: "35vh",
          }}
        >
          <AscSkillTool />
        </div>
        <div
          id="structure"
          style={{
            width: "100%",
            height: "100vh",
          }}
        >
          <Structure />
        </div>
      </div>
    </>
  );
};

export default IntroduceAsc;
