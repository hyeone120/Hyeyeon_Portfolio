export const labels = [
  "2026-01",
  "2026-02",
  "2026-03",
  "2026-04",
  "2026-05",
  "2026-06",
  "2026-07",
  "2026-08",
  "2026-09",
  "2026-10",
  "2026-11",
  "2026-12",
];

export const statusRegistered = [
  25, 35, 65, 145, 10, 35, 20, 70, 10, 35, 10, 10,
];
export const statusSuccess = [60, 45, 80, 50, 20, 70, 50, 30, 90, 10, 60, 30];
export const statusFailed = [30, 20, 10, 5, 15, 30, 40, 90, 60, 45, 40, 30];

///code
export const sqlCode = `WITH StatusValues AS (
    SELECT DISTINCT status
    FROM (VALUES (1),(2),(3)) AS v(status)
),
a AS (
    SELECT Status, DateTime
    FROM TB_ASystem
    WHERE YEAR(DateTime) = #{year}
)
SELECT sv.Status, ISNULL(COUNT(a.status), 0) as cnt
FROM StatusValues sv
LEFT JOIN a ON sv.status = a.Status
GROUP BY sv.Status`;

export const frontendCode = `import { Bar } from 'react-chartjs-2';

<Bar
  options={{
    responsive: true,
    scales: { x: { stacked: true }, y: { stacked: true } },
  }}
  data={{
    labels: labels.map(date => date.slice(5, 7) + '월'),
    datasets: [
      { label: "등록", data: statusRegistered, backgroundColor: "#60A5FA" },
      { label: "성공",  data: statusSuccess, backgroundColor: "#34D399" },
      { label: "실패", data: statusFailed, backgroundColor: "#FBBF24" },
    ],
  }}
/>
`;
