import ReactFlow, { Background, Controls } from "reactflow";
import { nodes } from "./node";
import { edges } from "./edge";
import BaseNode from "./node/BaseNode";
import UserNode from "./node/UserNode";
import "reactflow/dist/style.css";
import styles from "../ImageSystem.module.scss";

const Structure = () => {
  const nodeTypes = {
    baseNode: BaseNode,
    userNode: UserNode,
  };

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <h2 className={styles.title}>시스템 구조</h2>
      <div
        style={{
          width: "100%",
          height: "500px",
          border: "2px solid #e5e7eb",
          borderRadius: "12px",
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          defaultEdgeOptions={{ type: "smoothstep" }}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Structure;
