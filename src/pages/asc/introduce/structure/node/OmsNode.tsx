import { Handle, Position } from "reactflow";

const bigBox = {
  width: 600,
  height: 60,
  border: "1px solid #93c5fd",
  background: "#dbeafe",
  textAlign: "center" as const,
  borderRadius: 5,
  paddingTop: 20,
};

const OmsNode = () => {
  return (
    <div style={bigBox}>
      <p style={{ fontWeight: "bold" }}>운영관리 서브시스템</p>
      {/* 서브시스템 연결 */}
      <Handle type="target" position={Position.Top} id="sub" />
      {/* 망연계 연결 */}
      <Handle type="target" position={Position.Bottom} id="bridge" />
    </div>
  );
};

export default OmsNode;
