import { ddsBox } from "./BaseNode";
import { Handle, Position } from "reactflow";

const DataFileNode = () => {
  return (
    <div style={ddsBox}>
      <p style={{ fontWeight: "bold" }}>
        Storage / DB파일 저장
        <br />및 메타데이터 관리
      </p>
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="source" position={Position.Right} id="left" />
    </div>
  );
};

export default DataFileNode;
