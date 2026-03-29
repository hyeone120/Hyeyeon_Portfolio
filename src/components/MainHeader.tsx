import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "../styles/layout.module.scss";

const { Header } = Layout;

const MainHeader = () => {
  const navigate = useNavigate();

  return (
    <Header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        LEE HYEYEON
      </div>
    </Header>
  );
};

export default MainHeader;
