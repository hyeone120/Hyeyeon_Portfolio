import { type Edge } from "reactflow";

export const edges: Edge[] = [
  {
    id: "operation-scheduler",
    source: "operation",
    target: "scheduler",
    label: "JSON",
    type: "straight",
    targetHandle: "left",
  },
  {
    id: "sub-scheduler",
    source: "subsystem",
    target: "scheduler",
    label: "산출물(zip)",
    type: "straight",
    targetHandle: "top",
  },
  {
    id: "scheduler-storage",
    source: "scheduler",
    sourceHandle: "bottom",
    target: "storage",
    label: "메타데이터 저장",
    type: "straight",
  },
  {
    id: "storage-backend",
    source: "storage",
    target: "backend",
    type: "straight",
  },
  {
    id: "backend-frontend",
    source: "backend",
    target: "frontend",
    label: "REST API",
    type: "straight",
  },
];
