import { Handle, Position } from "reactflow";

const box = {
  width: 230,
  padding: 10,
  border: "1px solid #93c5fd",
  background: "#dbeafe",
  borderRadius: 5,
  textAlign: "center" as const,
};

export default function DdsUserNode() {
  return (
    <div style={box}>
      <p style={{ fontWeight: "bold" }}>자료배포 서브시스템 (사용자)</p>
      <Handle type="source" position={Position.Right} id="toUser" />
    </div>
  );
}
