import ReactFlow, { Background, Controls } from "reactflow";
import { nodes } from "./node";
import { edges } from "./edge";
import SchedulerNode from "./SchedulerNode";

const DdsStructure = () => {
  const nodeTypes = {
    schedulerNode: SchedulerNode,
  };

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <h2 style={{ marginBottom: "20px" }}>자료배포 서브시스템 구조</h2>

      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default DdsStructure;
