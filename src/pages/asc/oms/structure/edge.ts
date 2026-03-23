import { type Edge } from "reactflow";

export const edges: Edge[] = [
  {
    id: "servers-scheduler",
    source: "servers",
    target: "scheduler",
    label: "WMI",
    animated: true,
  },
  {
    id: "scheduler-backend",
    source: "scheduler",
    target: "backend",
    targetHandle: "http",
    label: "HTTP",
  },
  {
    id: "backend-frontend",
    source: "backend",
    target: "frontend",
    label: "REST API / WebSocket",
    animated: true,
  },
  {
    id: "dds-backend",
    source: "dds",
    target: "backend",
    targetHandle: "schedule",
    label: "Scheduling",
  },
];
