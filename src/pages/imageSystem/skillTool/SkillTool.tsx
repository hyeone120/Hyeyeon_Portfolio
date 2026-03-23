import Group from "./Group";
import { skills_backend, skills_frontend, tools } from "./SkillToolData";
import styles from "../ImageSystem.module.scss";

const SkillTool = () => {
  return (
    <>
      <div className={styles.row}>
        <span className={styles.rowTitle}>Skill</span>

        <div className={styles.skillBox}>
          <Group title="Frontend" list={skills_frontend} />
          <Group title="Backend" list={skills_backend} />
        </div>
      </div>

      <div className={styles.row}>
        <span className={styles.rowTitle}>Tool</span>

        <Group title="Tool" list={tools} />
      </div>
    </>
  );
};

export default SkillTool;
