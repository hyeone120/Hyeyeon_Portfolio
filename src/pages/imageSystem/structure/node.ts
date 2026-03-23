import { type Node, Position } from "reactflow";

export const nodes: Node[] = [
  // 1차 서버
  {
    id: "s1-1",
    position: { x: 0, y: 0 },
    data: { label: "1차서버" },
    sourcePosition: Position.Right,
  },
  {
    id: "s1-2",
    position: { x: 0, y: 120 },
    data: { label: "1차서버" },
    sourcePosition: Position.Right,
  },
  {
    id: "s1-3",
    position: { x: 0, y: 240 },
    data: { label: "1차서버" },
    sourcePosition: Position.Right,
  },

  // 2차 서버
  {
    id: "s2-1",
    position: { x: 200, y: 0 },
    data: { label: "2차서버" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "s2-2",
    position: { x: 200, y: 120 },
    data: { label: "2차서버" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "s2-3",
    position: { x: 200, y: 240 },
    data: { label: "2차서버" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },

  // 수집서버
  {
    id: "collector",
    position: { x: 450, y: 100 },
    data: { label: "수집서버" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },

  // WAS
  {
    id: "was",
    position: { x: 700, y: 100 },
    data: { label: "WAS (JEUS)" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },

  // 사용자
  {
    id: "user",
    position: { x: 950, y: 100 },
    data: { label: "사용자" },
    targetPosition: Position.Left,
  },

  // 스토리지
  {
    id: "storage",
    position: { x: 575, y: 240 },
    data: { label: "스토리지" },
    targetPosition: Position.Top,
    style: {
      pointerEvents: "none",
    },
  },
];
