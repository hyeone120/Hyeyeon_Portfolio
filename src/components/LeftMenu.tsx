import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { menu, type AppMenu } from "../data/Menu";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const convertToItems = (data: AppMenu[]): MenuItem[] =>
  data.map((item) => ({
    key: item.path,
    icon: item.icon,
    label: item.label,
    children: item.children ? convertToItems(item.children) : undefined,
  }));

const LeftMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const items: MenuItem[] = convertToItems(menu);

  return (
    <Sider
      collapsible
      width={290}
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultOpenKeys={[`/${location.pathname.split("/")[1]}`]}
        items={items}
        onClick={({ key }) => {
          if (typeof key === "string") {
            navigate(key);
          }
        }}
      />
    </Sider>
  );
};

export default LeftMenu;
