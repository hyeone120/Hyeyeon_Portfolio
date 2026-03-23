import ReactFlow, { Background, Controls } from "reactflow";
import { nodes } from "./node";
import { edges } from "./edge";
import "reactflow/dist/style.css";
import styles from "../ImageSystem.module.scss";

const Structure = () => {
  return (
    <div>
      <div className={styles.title}>시스템 구조</div>
      <div style={{ width: "100%", height: "600px" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
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
