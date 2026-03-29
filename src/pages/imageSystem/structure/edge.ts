import { type Edge } from "reactflow";

export const edges: Edge[] = [
  { id: "e1", source: "server1-1", target: "server2-1", type: "straight" },
  { id: "e2", source: "server1-2", target: "server2-2", type: "straight" },
  { id: "e3", source: "server1-3", target: "server2-3", type: "straight" },

  {
    id: "e4",
    source: "server2-1",
    target: "collector",
    type: "smoothstep",
    animated: true,
  },
  {
    id: "e5",
    source: "server2-2",
    target: "collector",
    type: "smoothstep",
    animated: true,
  },
  {
    id: "e6",
    source: "server2-3",
    target: "collector",
    type: "smoothstep",
    animated: true,
  },

  {
    id: "e7",
    source: "collector",
    target: "was",
    type: "straight",
    animated: true,
  },
  {
    id: "e9",
    source: "was",
    target: "user",
    label: "WebToB",
    type: "straight",
    animated: true,
  },

  { id: "e10", source: "collector", target: "storage", type: "smoothstep" },
];
