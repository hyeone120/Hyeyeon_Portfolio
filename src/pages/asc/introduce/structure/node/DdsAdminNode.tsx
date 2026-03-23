import { Handle, Position } from "reactflow";

const box = {
  width: 200,
  padding: 10,
  border: "1px solid #4a6c82",
  background: "#9fb6c0",
  textAlign: "center" as const,
};

const DdsAdminNode = () => {
  return (
    <div style={box}>
      자료배포 서브시스템 (운영자)
      {/* 망연계로 올라가는 화살표 */}
      <Handle type="source" position={Position.Top} id="adminOut" />
    </div>
  );
};

export default DdsAdminNode;
