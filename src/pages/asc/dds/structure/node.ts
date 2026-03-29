import { Position, type Node } from "reactflow";

export const nodes: Node[] = [
  {
    id: "subsystem",
    position: { x: 350, y: 50 },
    type: "baseNode",
    data: {
      label: "타 서브시스템",
      sourcePosition: Position.Bottom,
      styleType: "otherBox",
    },
  },
  {
    id: "operation",
    position: { x: 50, y: 198 },
    type: "baseNode",
    data: {
      label: "운영관리 서브시스템",
      targetPosition: Position.Right,
      styleType: "otherBox",
    },
  },
  {
    id: "scheduler",
    position: { x: 350, y: 190 },
    data: {},
    type: "schedulerNode",
  },
  {
    id: "storage",
    position: { x: 350, y: 330 },
    type: "baseNode",
    data: {
      label: "Storage / DB파일 저장 및 메타데이터 관리",
      targetPosition: Position.Top,
      sourcePosition: Position.Right,
    },
  },
  {
    id: "backend",
    position: { x: 600, y: 339 },
    type: "baseNode",
    data: {
      label: "Backend(Spring Boot)",
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
    },
  },
  {
    id: "frontend",
    position: { x: 880, y: 339 },
    type: "baseNode",
    data: {
      label: "Frontend(React)",
      targetPosition: Position.Left,
      sourcePosition: Position.Left,
    },
  },
];
