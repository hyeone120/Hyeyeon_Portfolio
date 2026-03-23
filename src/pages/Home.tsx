import MainHeader from "../components/MainHeader";
import LeftMenu from "../components/LeftMenu";
import MainBody from "../components/MainBody";
import { Layout } from "antd";

const Home = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MainHeader />
      <Layout>
        <LeftMenu />
        <MainBody />
      </Layout>
    </Layout>
  );
};

export default Home;
