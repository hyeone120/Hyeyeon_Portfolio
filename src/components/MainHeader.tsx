import { Layout } from "antd";
import "../styles/layout.scss";

const { Header } = Layout;

const MainHeader = () => {
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div className="logo">LEE HYEYEON</div>
    </Header>
  );
};

export default MainHeader;
