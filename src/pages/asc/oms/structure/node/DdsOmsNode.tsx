import { Handle, Position } from "reactflow";
import { omsBox } from "./BaseNode";

const DdsOmsNode = () => {
  return (
    <div style={omsBox}>
      <p style={{ fontWeight: "bold" }}>Spring Boot Backend</p>
      <Handle type="target" position={Position.Top} id="http" />
      <Handle type="target" position={Position.Left} id="schedule" />
      <Handle type="source" position={Position.Bottom} id="frontend" />
    </div>
  );
};

export default DdsOmsNode;
