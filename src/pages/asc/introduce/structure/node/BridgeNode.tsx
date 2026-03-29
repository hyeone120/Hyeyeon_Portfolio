import { Handle, Position } from "reactflow";

const bridgeStyle = {
  width: 600,
  border: "1px solid #adaeaf",
  color: "#1f2937",
  background: "#f3f6fb",
  textAlign: "center" as const,
  borderRadius: 5,
  padding: 10,
};

export default function BridgeNode() {
  return (
    <div style={bridgeStyle}>
      망연계
      {/* OMS 연결 */}
      <Handle type="source" position={Position.Top} id="toOms" />
      {/* 관리자 연결 */}
      <Handle type="target" position={Position.Bottom} id="fromAdmin" />
    </div>
  );
}
