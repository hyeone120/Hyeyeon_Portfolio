import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

const MainBody = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Content
        style={{
          margin: "0 16px",
          height: "100%",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            padding: 30,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default MainBody;
