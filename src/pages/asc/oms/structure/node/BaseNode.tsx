import { Handle, type NodeProps } from "reactflow";

export const omsBox = {
  width: 250,
  padding: 10,
  border: "1px solid #93c5fd",
  background: "#dbeafe",
  textAlign: "center" as const,
  borderRadius: 5,
};

const otherBox = {
  width: 250,
  padding: 10,
  border: "1px solid #adaeaf",
  color: "#1f2937",
  background: "#f3f6fb",
  borderRadius: 5,
  textAlign: "center" as const,
};

const BaseNode = ({ data }: NodeProps) => {
  return (
    <div style={data.styleType == "otherBox" ? otherBox : omsBox}>
      <p
        style={{ fontWeight: data.styleType == "otherBox" ? "normal" : "bold" }}
      >
        {data.label}
      </p>

      {data.targetPosition && (
        <Handle type="target" position={data.targetPosition} />
      )}

      {data.sourcePosition && (
        <Handle type="source" position={data.sourcePosition} />
      )}
    </div>
  );
};

export default BaseNode;
