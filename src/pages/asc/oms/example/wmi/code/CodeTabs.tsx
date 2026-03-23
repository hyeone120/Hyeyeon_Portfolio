import CodeBlock from "./CodeBlock";
import { backendCode, frontendCode, pythonCode } from "./WmiData";
import { Tabs } from "antd";

const CodeTabs = () => {
  const items = [
    {
      key: "python",
      label: "🐍 Python (WMI)",
      children: (
        <>
          <p>서버 자원(CPU, Memory, Disk) 수집</p>
          <CodeBlock code={pythonCode} />
        </>
      ),
    },
    {
      key: "backend",
      label: "☕ Spring WebSocket",
      children: (
        <>
          <p>수집된 데이터를 실시간으로 클라이언트에 전달</p>
          <CodeBlock code={backendCode} />
        </>
      ),
    },
    {
      key: "frontend",
      label: "⚛️ React",
      children: (
        <>
          <p>WebSocket 구독을 통해 실시간 데이터 렌더링</p>
          <CodeBlock code={frontendCode} />
        </>
      ),
    },
  ];

  return <Tabs defaultActiveKey="python" items={items} />;
};

export default CodeTabs;
