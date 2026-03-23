import { Handle, Position } from "reactflow";

const DdsOmsNode = () => {
  return (
    <div
      style={{
        padding: "10px 25px",
        border: "1px solid ",
        borderRadius: 3,
        fontSize: 12,
      }}
    >
      Spring Boot Backend
      <Handle type="target" position={Position.Top} id="http" />
      <Handle type="target" position={Position.Left} id="schedule" />
      <Handle type="source" position={Position.Bottom} id="frontend" />
    </div>
  );
};

export default DdsOmsNode;
