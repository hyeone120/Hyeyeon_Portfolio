import { MailOutlined } from "@ant-design/icons";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <h3 className={styles.name}>이혜연</h3>
        <p className={styles.desc}>사용자 중심 서비스를 만드는 개발자</p>

        <div className={styles.divider} />

        <div className={styles.contact}>
          <MailOutlined /> &nbsp;
          <a href="mailto:hylee337@naver.com">Email: hylee337@naver.com</a>
        </div>

        <div className={styles.tech}>
          Java | Spring Boot | React | TypeScript
        </div>

        <p className={styles.copy}>© 2026 Lee HyeYeon. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
