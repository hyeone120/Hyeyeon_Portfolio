import MainHeader from "../components/MainHeader";
import LeftMenu from "../components/LeftMenu";
import MainBody from "../components/MainBody";
import { Layout } from "antd";

const Home = () => {
  return (
    <Layout style={{ height: "100vh", overflow: "hidden" }}>
      <MainHeader />
      <Layout>
        <LeftMenu />
        <MainBody />
      </Layout>
    </Layout>
  );
};

export default Home;
