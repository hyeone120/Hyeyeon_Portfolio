import styles from "..//MonitoringWmi.module.scss";

interface Props {
  code: string;
}

const CodeBlock = ({ code }: Props) => {
  return (
    <pre className={styles.code}>
      <code>{code}</code>
    </pre>
  );
};

export default CodeBlock;
