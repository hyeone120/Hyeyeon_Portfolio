import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
const { Content } = Layout;

const MainBody = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Content
        style={{
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
        <Footer />
      </Content>
    </Layout>
  );
};

export default MainBody;
