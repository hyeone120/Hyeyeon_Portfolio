import styles from "../../Asc.module.scss";

interface GroupProps {
  title: string;
  list: string[];
}

const Group = ({ title, list }: GroupProps) => {
  return (
    <div className={styles.skillGroup}>
      {title === "Tool" ? (
        <></>
      ) : (
        <span className={styles.groupTitle}>{title}</span>
      )}
      <div className={styles.skillList}>
        {list.map((item) => (
          <span key={item} className={styles.skill}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Group;
