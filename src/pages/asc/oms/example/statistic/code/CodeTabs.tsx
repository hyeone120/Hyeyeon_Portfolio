import { frontendCode, sqlCode } from "./ChartData";
import CodeBlock from "./CodeBlock";
import { Tabs } from "antd";

const CodeTabs = () => {
  const items = [
    {
      key: "sql",
      label: "🧮 SQL",
      children: (
        <>
          <p>모든 상태값 집계</p>
          <CodeBlock code={sqlCode} />
        </>
      ),
    },
    {
      key: "frontend",
      label: "📊 Frontend",
      children: (
        <>
          <p>Stacked Bar Chart로 시각화</p>
          <CodeBlock code={frontendCode} />
        </>
      ),
    },
  ];

  return <Tabs defaultActiveKey="python" items={items} />;
};

export default CodeTabs;
