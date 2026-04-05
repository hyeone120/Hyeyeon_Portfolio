import { Handle, Position } from "reactflow";
import { UserOutlined } from "@ant-design/icons";

const user = {
  padding: 10,
  border: "1px solid #999",
  borderRadius: 5,
};

export default function UserNode() {
  return (
    <div style={user}>
      <UserOutlined /> 일반 사용자
      <Handle type="target" position={Position.Left} id="fromWas" />
    </div>
  );
}
