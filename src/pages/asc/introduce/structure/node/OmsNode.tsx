import { Handle, Position } from "reactflow";

const bigBox = {
  width: 600,
  height: 60,
  border: "1px solid #4a6c82",
  background: "#9fb6c0",
  textAlign: "center" as const,
  paddingTop: 20,
};

const OmsNode = () => {
  return (
    <div style={bigBox}>
      운영관리 서브시스템
      {/* 서브시스템 연결 */}
      <Handle type="target" position={Position.Top} id="sub" />
      {/* 망연계 연결 */}
      <Handle type="target" position={Position.Bottom} id="bridge" />
    </div>
  );
};

export default OmsNode;
