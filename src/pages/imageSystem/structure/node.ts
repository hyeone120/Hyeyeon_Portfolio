import { type Node, Position } from "reactflow";

export const nodes: Node[] = [
  // 1차 서버
  {
    id: "server1-1",
    position: { x: 50, y: 70 },
    type: "baseNode",
    data: {
      label: "1차서버",
      sourcePosition: Position.Right,
      styleType: "otherBox",
    },
  },
  {
    id: "server1-2",
    position: { x: 50, y: 220 },
    type: "baseNode",
    data: {
      label: "1차서버",
      sourcePosition: Position.Right,
      styleType: "otherBox",
    },
  },
  {
    id: "server1-3",
    position: { x: 50, y: 370 },
    type: "baseNode",
    data: {
      label: "1차서버",
      sourcePosition: Position.Right,
      styleType: "otherBox",
    },
  },

  // 2차 서버
  {
    id: "server2-1",
    position: { x: 250, y: 70 },
    type: "baseNode",
    data: {
      label: "2차서버",
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
  },
  {
    id: "server2-2",
    position: { x: 250, y: 220 },
    type: "baseNode",
    data: {
      label: "2차서버",
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
  },
  {
    id: "server2-3",
    position: { x: 250, y: 370 },
    type: "baseNode",
    data: {
      label: "2차서버",
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
  },

  // 수집서버
  {
    id: "collector",
    position: { x: 450, y: 220 },
    type: "baseNode",
    data: {
      label: "수집서버",
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
  },

  // WAS
  {
    id: "was",
    position: { x: 700, y: 220 },
    type: "baseNode",
    data: {
      label: "WAS (JEUS)",
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
  },

  // 사용자
  {
    id: "user",
    position: { x: 950, y: 220 },
    type: "baseNode",
    data: {
      label: "사용자",
      targetPosition: Position.Left,
      styleType: "otherBox",
    },
  },

  // 스토리지
  {
    id: "storage",
    position: { x: 575, y: 320 },
    type: "baseNode",
    data: {
      label: "스토리지",
      targetPosition: Position.Top,
    },
  },
];
