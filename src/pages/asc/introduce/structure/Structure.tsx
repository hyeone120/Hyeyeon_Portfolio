import ReactFlow, { Background, Controls } from "reactflow";
import { nodes } from "./node";
import { edges } from "./edge";
import OmsNode from "./node/OmsNode";
import DdsAdminNode from "./node/DdsAdminNode";
import BridgeNode from "./node/BridgeNode";
import DdsUserNode from "./node/DdsUserNode";
import UserNode from "./node/UserNode";
import "reactflow/dist/style.css";
import styles from "../../Asc.module.scss";

const Structure = () => {
  const nodeTypes = {
    DdsAdminNode: DdsAdminNode,
    DdsUserNode: DdsUserNode,
    bridgeNode: BridgeNode,
    omsNode: OmsNode,
    userNode: UserNode,
  };

  return (
    <div>
      <div className={styles.title}>시스템 구조</div>
      <div style={{ width: "100%", height: "800px" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          defaultEdgeOptions={{ type: "smoothstep" }}
        >
          <Background gap={20} size={1} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Structure;
