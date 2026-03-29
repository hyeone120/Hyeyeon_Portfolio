import ReactFlow, { Background, Controls } from "reactflow";
import { nodes } from "./node";
import { edges } from "./edge";
import BaseNode from "./node/BaseNode";
import SchedulerNode from "./node/SchedulerNode";

const DdsStructure = () => {
  const nodeTypes = {
    baseNode: BaseNode,
    schedulerNode: SchedulerNode,
  };

  return (
    <div style={{ width: "100%", height: "450px" }}>
      <h2 style={{ marginBottom: "20px" }}>자료배포 서브시스템 구조</h2>
      <div
        style={{
          width: "100%",
          height: "450px",
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

export default DdsStructure;
