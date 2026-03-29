import { Handle, Position } from "reactflow";
import { ddsBox } from "./BaseNode";

const SchedulerNode = () => {
  return (
    <div style={ddsBox}>
      <p style={{ fontWeight: "bold" }}>
        Scheduler
        <br />
        파일 감지 및 메타데이터 생성
      </p>
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="source" position={Position.Left} id="left" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
    </div>
  );
};

export default SchedulerNode;
