import ReactFlow, { Background, Controls } from "reactflow";
import { nodes } from "./node";
import { edges } from "./edge";
import BaseNode from "./node/BaseNode";
import DdsOmsNode from "./node/DdsOmsNode";
import styles from "../Oms.module.scss";

const OmsStructure = () => {
  const nodeTypes = {
    baseNode: BaseNode,
    ddsOmsNode: DdsOmsNode,
  };

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <h2 className={styles.title}>운영관리 서브시스템 구조</h2>
      <div
        style={{
          width: "100%",
          height: "500px",
          border: "2px solid #e5e7eb",
          borderRadius: "12px",
        }}
      >
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default OmsStructure;
