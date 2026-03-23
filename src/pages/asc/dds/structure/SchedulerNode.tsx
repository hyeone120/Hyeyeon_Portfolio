import { Handle, Position } from "reactflow";

const SchedulerNode = () => {
  return (
    <div
      style={{
        padding: "10px 20px",
        border: "1px solid #999",
        borderRadius: 3,
        background: "#fff",
        fontSize: 12,
        textAlign: "center",
      }}
    >
      Scheduler
      <br />
      파일 감지 및 메타데이터 생성
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="target" position={Position.Left} id="left" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
    </div>
  );
};

export default SchedulerNode;
