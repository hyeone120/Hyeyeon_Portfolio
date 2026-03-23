import { Position, type Node } from "reactflow";

export const nodes: Node[] = [
  {
    id: "servers",
    position: { x: 400, y: 0 },
    data: { label: "타 서브시스템" },
    sourcePosition: Position.Bottom,
    type: "input",
  },
  {
    id: "scheduler",
    position: { x: 400, y: 120 },
    data: { label: "모니터링 스케줄러 (Python)" },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: "backend",
    position: { x: 390, y: 240 },
    type: "ddsOmsNode",
    data: {},
  },
  {
    id: "frontend",
    position: { x: 400, y: 360 },
    data: { label: "React Frontend" },
    targetPosition: Position.Top,
    type: "output",
  },
  {
    id: "dds",
    position: { x: 100, y: 240 },
    data: { label: "자료배포 스케줄링" },
    sourcePosition: Position.Right,
  },
];
