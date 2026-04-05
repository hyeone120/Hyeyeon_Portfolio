import { type Node } from "reactflow";

export const nodes: Node[] = [
  // 서브시스템
  {
    id: "sub1",
    type: "subSystemNode",
    position: { x: 150, y: 60 },
    data: { label: "서브시스템1" },
  },
  {
    id: "sub2",
    type: "subSystemNode",
    position: { x: 370, y: 60 },
    data: { label: "서브시스템2" },
  },
  {
    id: "sub3",
    type: "subSystemNode",
    position: { x: 590, y: 60 },
    data: { label: "서브시스템3" },
  },
  {
    id: "sub4",
    type: "subSystemNode",
    position: { x: 810, y: 60 },
    data: { label: "서브시스템4" },
  },

  // OMS
  {
    id: "oms",
    type: "omsNode",
    position: { x: 250, y: 210 },
    data: {},
  },

  // 망연계
  {
    id: "bridge",
    type: "bridgeNode",
    position: { x: 250, y: 350 },
    data: {},
  },

  // DDS 관리자
  {
    id: "ddsAdmin",
    type: "ddsAdminNode",
    position: { x: 435, y: 490 },
    data: {},
  },

  // DDS 사용자
  {
    id: "ddsUser",
    type: "ddsUserNode",
    position: { x: 750, y: 490 },
    data: {},
  },

  // 일반 사용자
  {
    id: "user",
    type: "userNode",
    position: { x: 1050, y: 490 },
    data: {},
  },
];
