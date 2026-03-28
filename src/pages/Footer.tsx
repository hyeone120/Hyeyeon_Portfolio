import { GithubOutlined, MailOutlined } from "@ant-design/icons";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h3 className={styles.name}>이혜연</h3>
          <p className={styles.desc}>사용자 중심 서비스를 만드는 개발자</p>
          <p className={styles.keywords}>문제 해결 | 협업 | 실행력 | 개선 </p>
        </div>

        <div className={styles.right}>
          <div className={styles.contact}>
            <MailOutlined />
            {"  "}
            <a href="mailto:hylee337@naver.com" target="_blank">
              hylee337@naver.com
            </a>
          </div>
          <div className={styles.links}>
            <GithubOutlined />
            {"  "}
            <a
              href="https://github.com/hyeone120/Hyeyeon_Portfolio.git"
              target="_blank"
            >
              github.com/hyeone120
            </a>
          </div>

          <div className={styles.tech}>
            Java | Spring Boot | React | TypeScript
          </div>

          <p className={styles.copy}>
            © 2026 Lee HyeYeon. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
