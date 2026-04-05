import { Handle, Position } from "reactflow";

const box = {
  width: 230,
  padding: 10,
  border: "1px solid #93c5fd",
  background: "#dbeafe",
  borderRadius: 5,
  textAlign: "center" as const,
};

const DdsAdminNode = () => {
  return (
    <div style={box}>
      <p style={{ fontWeight: "bold" }}>자료배포 서브시스템 (운영자)</p>
      {/* 망연계로 올라가는 화살표 */}
      <Handle type="source" position={Position.Top} id="adminOut" />
    </div>
  );
};

export default DdsAdminNode;
