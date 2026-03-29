import { backendCode, frontendCode } from "./ChartData";
import CodeBlock from "./CodeBlock";
import { Tabs } from "antd";

const CodeTabs = () => {
  const items = [
    {
      key: "Backend",
      label: "☕ Backend",
      children: (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p style={{ color: "#9ca3af", fontSize: "13px" }}>
            검색조건 기준으로 데이터 조회 및 페이징 처리 예시
          </p>
          <CodeBlock code={backendCode} />
        </div>
      ),
    },
    {
      key: "frontend",
      label: "⚛️ Frontend",
      children: (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p style={{ color: "#9ca3af", fontSize: "13px" }}>
            Axios, AgGridReact로 테이블 구현 예시
          </p>
          <CodeBlock code={frontendCode} />
        </div>
      ),
    },
  ];

  return <Tabs defaultActiveKey="sql" items={items} />;
};

export default CodeTabs;
