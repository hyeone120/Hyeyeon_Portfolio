import { Handle, Position, type NodeProps } from "reactflow";

const box = {
  width: 180,
  padding: 10,
  border: "1px solid #adaeaf",
  color: "#1f2937",
  background: "#f3f6fb",
  borderRadius: 5,
  textAlign: "center" as const,
};

const SubSystemNode = ({ data }: NodeProps) => {
  return (
    <div style={box}>
      {data.label}
      <Handle type="source" position={Position.Bottom} id="subSystem" />
    </div>
  );
};

export default SubSystemNode;
