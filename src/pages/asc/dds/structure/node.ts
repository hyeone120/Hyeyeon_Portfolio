import { Position, type Node } from "reactflow";

export const nodes: Node[] = [
  {
    id: "subsystem",
    position: { x: 400, y: 50 },
    type: "baseNode",
    data: {
      label: "타 서브시스템",
      sourcePosition: Position.Bottom,
      styleType: "otherBox",
    },
  },
  {
    id: "operation",
    position: { x: 100, y: 198 },
    type: "baseNode",
    data: {
      label: "운영관리 서브시스템",
      targetPosition: Position.Right,
      styleType: "otherBox",
    },
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
    data: {},
    type: "dataFileNode",
  },
  {
    id: "backend",
    position: { x: 700, y: 339 },
    type: "baseNode",
    data: {
      label: "Backend(Spring Boot)",
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
    },
  },
  {
    id: "frontend",
    position: { x: 1020, y: 339 },
    type: "baseNode",
    data: {
      label: "Frontend(React)",
      targetPosition: Position.Left,
      sourcePosition: Position.Left,
    },
  },
];
