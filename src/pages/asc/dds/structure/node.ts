import { Position, type Node } from "reactflow";

const nodeStyle = {
  padding: 15,
  borderRadius: 10,
  border: "1px solid #d9d9d9",
  background: "#f6fbf8",
  textAlign: "center" as const,
  width: 180,
  fontWeight: 500,
};

export const nodes: Node[] = [
  {
    id: "subsystem",
    position: { x: 400, y: 50 },
    data: { label: "서브시스템1" },
    style: nodeStyle,
    sourcePosition: Position.Bottom,
  },
  {
    id: "operation",
    position: { x: 100, y: 195 },
    data: { label: "운영관리 서브시스템" },
    style: nodeStyle,
    sourcePosition: Position.Right,
  },
  {
    id: "scheduler",
    position: { x: 400, y: 190 },
    data: {},
    type: "schedulerNode",
  },
  {
    id: "storage",
    position: { x: 400, y: 330 },
    data: { label: "Storage / DB파일 저장 및 메타데이터 관리" },
    style: nodeStyle,
    targetPosition: Position.Top,
    sourcePosition: Position.Right,
  },
  {
    id: "backend",
    position: { x: 650, y: 335 },
    data: { label: "Backend(Spring Boot)" },
    style: nodeStyle,
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: "frontend",
    position: { x: 900, y: 335 },
    data: { label: "Frontend(React)" },
    style: nodeStyle,
    targetPosition: Position.Left,
    sourcePosition: Position.Left,
  },
];
