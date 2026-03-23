import { type Edge } from "reactflow";

export const edges: Edge[] = [
  { id: "e1", source: "s1-1", target: "s2-1", type: "straight" },
  { id: "e2", source: "s1-2", target: "s2-2", type: "straight" },
  { id: "e3", source: "s1-3", target: "s2-3", type: "straight" },

  { id: "e4", source: "s2-1", target: "collector", type: "smoothstep" },
  { id: "e5", source: "s2-2", target: "collector", type: "smoothstep" },
  { id: "e6", source: "s2-3", target: "collector", type: "smoothstep" },

  { id: "e7", source: "collector", target: "was", type: "straight" },
  // { id: "e8", source: "was", target: "webtob", type: "straight" },
  {
    id: "e9",
    source: "was",
    target: "user",
    label: "WebToB",
    type: "straight",
  },

  { id: "e10", source: "collector", target: "storage", type: "smoothstep" },
];
