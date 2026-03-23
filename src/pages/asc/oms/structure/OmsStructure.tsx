import ReactFlow, { Background, Controls } from "reactflow";
import { nodes } from "./node";
import { edges } from "./edge";
import DdsOmsNode from "./DdsOmsNode";
import styles from "../Oms.module.scss";

const OmsStructure = () => {
  const nodeTypes = {
    ddsOmsNode: DdsOmsNode,
  };

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <h2 className={styles.title}>운영관리 서브시스템 구조</h2>

      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default OmsStructure;
