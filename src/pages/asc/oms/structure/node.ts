import { Position, type Node } from "reactflow";

export const nodes: Node[] = [
  {
    id: "servers",
    position: { x: 500, y: 50 },
    type: "baseNode",
    data: {
      label: "타 서브시스템",
      sourcePosition: Position.Bottom,
      styleType: "otherBox",
    },
  },
  {
    id: "scheduler",
    position: { x: 500, y: 170 },
    type: "baseNode",
    data: {
      label: "모니터링 스케줄러 (Python)",
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
  },
  {
    id: "backend",
    position: { x: 500, y: 290 },
    type: "ddsOmsNode",
    data: {},
  },
  {
    id: "frontend",
    position: { x: 500, y: 410 },
    type: "baseNode",
    data: {
      label: "React Frontend",
      targetPosition: Position.Top,
    },
  },
  {
    id: "dds",
    position: { x: 100, y: 290 },
    type: "baseNode",
    data: {
      label: "자료배포 스케줄링",
      sourcePosition: Position.Right,
      styleType: "otherBox",
    },
  },
];
