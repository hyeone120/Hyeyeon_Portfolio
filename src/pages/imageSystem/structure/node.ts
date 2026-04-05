import { type Node, Position } from "reactflow";

export const nodes: Node[] = [
  // 1차 서버
  {
    id: "server1-1",
    position: { x: 100, y: 70 },
    type: "baseNode",
    data: {
      label: "1차서버",
      sourcePosition: Position.Right,
      styleType: "otherBox",
    },
  },
  {
    id: "server1-2",
    position: { x: 100, y: 220 },
    type: "baseNode",
    data: {
      label: "1차서버",
      sourcePosition: Position.Right,
      styleType: "otherBox",
    },
  },
  {
    id: "server1-3",
    position: { x: 100, y: 370 },
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
    position: { x: 300, y: 70 },
    type: "baseNode",
    data: {
      label: "2차서버",
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
  },
  {
    id: "server2-2",
    position: { x: 300, y: 220 },
    type: "baseNode",
    data: {
      label: "2차서버",
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
  },
  {
    id: "server2-3",
    position: { x: 300, y: 370 },
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
    position: { x: 500, y: 220 },
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
    position: { x: 750, y: 220 },
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
    type: "userNode",
    position: { x: 1000, y: 220 },
    data: {},
  },

  // 스토리지
  {
    id: "storage",
    position: { x: 630, y: 320 },
    type: "baseNode",
    data: {
      label: "스토리지",
      targetPosition: Position.Top,
    },
  },
];
