import ReactFlow, { Background, Controls } from "reactflow";
import { nodes } from "./node";
import { edges } from "./edge";
import SubSystemNode from "./node/SubSystemNode";
import OmsNode from "./node/OmsNode";
import DdsAdminNode from "./node/DdsAdminNode";
import BridgeNode from "./node/BridgeNode";
import DdsUserNode from "./node/DdsUserNode";
import UserNode from "./node/UserNode";
import "reactflow/dist/style.css";

const Structure = () => {
  const nodeTypes = {
    subSystemNode: SubSystemNode,
    ddsAdminNode: DdsAdminNode,
    ddsUserNode: DdsUserNode,
    bridgeNode: BridgeNode,
    omsNode: OmsNode,
    userNode: UserNode,
  };

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <h2 style={{ marginBottom: "20px" }}>시스템 구조</h2>
      <div
        style={{
          width: "100%",
          height: "600px",
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
          <Background gap={20} size={1} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Structure;
