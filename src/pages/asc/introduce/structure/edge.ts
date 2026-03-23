import { type Edge, MarkerType } from "reactflow";

function createEdge(
  source: string,
  target: string,
  sourceHandle?: string,
  targetHandle?: string,
): Edge {
  return {
    id: `${source}-${target}`,
    source,
    target,
    sourceHandle,
    targetHandle,
    markerEnd: { type: MarkerType.ArrowClosed },
    type: "smoothstep",
  };
}

export const edges: Edge[] = [
  // 서브시스템 → OMS
  createEdge("sub1", "oms", undefined, "sub"),
  createEdge("sub2", "oms", undefined, "sub"),
  createEdge("sub3", "oms", undefined, "sub"),
  createEdge("sub4", "oms", undefined, "sub"),

  // 관리자 흐름
  createEdge("ddsAdmin", "bridge", "adminOut", "fromAdmin"),
  createEdge("bridge", "oms", "toOms", "bridge"),

  // 사용자 흐름
  createEdge("ddsUser", "user", "toUser", "fromDds"),
];
