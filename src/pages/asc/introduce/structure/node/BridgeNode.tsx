import { Handle, Position } from "reactflow";

const bridgeStyle = {
  width: 600,
  border: "1px solid #6ea0c4",
  background: "#8fb4d6",
  textAlign: "center" as const,
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
