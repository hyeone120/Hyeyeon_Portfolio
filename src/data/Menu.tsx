import {
  UnorderedListOutlined,
  DeploymentUnitOutlined,
  InfoCircleOutlined,
  LineChartOutlined,
  ShareAltOutlined,
  RocketOutlined,
} from "@ant-design/icons";

export interface AppMenu {
  label: string;
  path: string;
  icon: React.ReactNode;
  children?: AppMenu[];
}

export const menu = [
  {
    label: "목차",
    path: "/",
    icon: <UnorderedListOutlined />,
  },
  {
    label: "농업위성정보 활용시스템",
    path: "/asc",
    icon: <DeploymentUnitOutlined />,
    children: [
      {
        label: "소개",
        path: "/asc/introduce",
        icon: <InfoCircleOutlined />,
      },
      {
        label: "운영관리 서브시스템",
        path: "/asc/oms",
        icon: <LineChartOutlined />,
      },
      {
        label: "자료배포 서브시스템",
        path: "/asc/dds",
        icon: <ShareAltOutlined />,
      },
    ],
  },

  {
    label: "국군 제9965부대 통합유지보수",
    path: "/imageSystem",
    icon: <RocketOutlined />,
    children: [
      {
        label: "프로젝트 개요",
        path: "/imageSystem/introduce",
        icon: <InfoCircleOutlined />,
      },
    ],
  },
] satisfies AppMenu[];
