import Group from "./Group";
import { skills_backend, skills_frontend, tools } from "./AscSkillToolData";
import styles from "../../Asc.module.scss";

const AscSkillTool = () => {
  return (
    <>
      <div className={styles.row}>
        <span className={styles.title}>Skill</span>

        <div className={styles.skillBox}>
          <Group title="Frontend" list={skills_frontend} />
          <Group title="Backend" list={skills_backend} />
        </div>
      </div>

      <div className={styles.row}>
        <span className={styles.title}>Tool</span>

        <Group title="Tool" list={tools} />
      </div>
    </>
  );
};

export default AscSkillTool;
