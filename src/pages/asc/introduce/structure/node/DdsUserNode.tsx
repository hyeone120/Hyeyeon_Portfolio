import { Handle, Position } from "reactflow";

const box = {
  width: 200,
  padding: 10,
  border: "1px solid #4a6c82",
  background: "#9fb6c0",
  textAlign: "center" as const,
};

export default function DdsUserNode() {
  return (
    <div style={box}>
      자료배포 서브시스템 (사용자)
      <Handle type="source" position={Position.Right} id="toUser" />
    </div>
  );
}
