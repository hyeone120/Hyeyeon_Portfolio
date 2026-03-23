import { type Node } from "reactflow";

const box = {
  width: 180,
  padding: 10,
  border: "1px solid #4a6c82",
  background: "#9fb6c0",
  textAlign: "center" as const,
};

export const nodes: Node[] = [
  // 서브시스템
  {
    id: "sub1",
    position: { x: 100, y: 50 },
    data: { label: "서브시스템1" },
    style: box,
  },
  {
    id: "sub2",
    position: { x: 320, y: 50 },
    data: { label: "서브시스템2" },
    style: box,
  },
  {
    id: "sub3",
    position: { x: 540, y: 50 },
    data: { label: "서브시스템3" },
    style: box,
  },
  {
    id: "sub4",
    position: { x: 760, y: 50 },
    data: { label: "서브시스템4" },
    style: box,
  },

  // OMS
  {
    id: "oms",
    type: "omsNode",
    position: { x: 200, y: 200 },
    data: {},
  },

  // 망연계
  {
    id: "bridge",
    type: "bridgeNode",
    position: { x: 200, y: 340 },
    data: {},
  },

  // DDS 관리자
  {
    id: "ddsAdmin",
    type: "DdsAdminNode",
    position: { x: 400, y: 480 },
    data: {},
  },

  // DDS 사용자
  {
    id: "ddsUser",
    type: "DdsUserNode",
    position: { x: 700, y: 480 },
    data: {},
  },

  // 일반 사용자
  {
    id: "user",
    type: "userNode",
    position: { x: 950, y: 480 },
    data: {},
  },
];
