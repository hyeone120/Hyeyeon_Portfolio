import { Handle, Position } from "reactflow";

const user = {
  padding: 10,
  border: "1px solid #999",
  borderRadius: 8,
};

export default function UserNode() {
  return (
    <div style={user}>
      일반 사용자
      <Handle type="target" position={Position.Left} id="fromDds" />
    </div>
  );
}
