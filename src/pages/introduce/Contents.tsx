import styles from "./Introduce.module.scss";

const Contents = () => {
  return (
    <div className={styles.projectSection}>
      <div className={styles.body}>
        <h2>01. 농업위성정보 활용시스템</h2>
        <div className={styles.row}>
          <span className={styles.title}>개발 기간</span>
          <span className={styles.content}>2024.06 ~ 2025.06 (12개월)</span>
        </div>

        <div className={styles.row}>
          <span className={styles.title}>참여 인원</span>
          <span className={styles.content}>2명</span>
        </div>

        <div className={styles.row}>
          <span className={styles.title}>기여도</span>
          <span className={styles.content}>60%</span>
        </div>

        <div className={styles.row}>
          <span className={styles.title}>프로젝트 설명</span>
          <ul className={styles.contentBox}>
            <li>
              운영관리 시스템: 서버 및 스토리지, 산출물 상태를 실시간으로
              모니터링하고 로그 및 사용자 관리 기능 제공
            </li>
            <li>
              자료배포 시스템: 산출물을 지도 기반으로 시각화하여 사용자에게
              배포하고 검색 기능 제공
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.body}>
        <h2>02. 국군 제 9965 부대 통합 유지보수 및 신규 체계 연동 서버 구축</h2>

        <div className={styles.row}>
          <span className={styles.title}>개발 기간</span>
          <ul className={styles.contentBox}>
            <li>유지보수: 2022.06 ~ 현재 (3년 9개월)</li>
            <li>신규 체계 연동 서버 구축: 2024.06 ~ 2024.12 (6개월)</li>
          </ul>
        </div>

        <div className={styles.row}>
          <span className={styles.title}>참여 인원</span>
          <span className={styles.content}>2명</span>
        </div>
        <div className={styles.row}>
          <span className={styles.title}>기여도</span>
          <span className={styles.content}>80%</span>
        </div>

        <div className={styles.row}>
          <span className={styles.title}>프로젝트 설명</span>
          <div className={styles.contentBox}>
            <p>
              10년 이상 운영된 기존 시스템의 안정성을 강화하고, 신규 체계와의
              연동 기능을 추가하여 서비스 신뢰성과 운영 효율을 향상
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
