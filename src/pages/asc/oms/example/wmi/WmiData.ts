export const codeString = `
import { Bar } from "react-chartjs-2";

const options = {
  indexAxis: "y" as const,
  scales: {
    x: { min: 0, max: 100, display: false }, // 길이 고정
    y: { display: false },
  },
  plugins: { legend: { display: false } },
};

const data = {
  labels: ["CPU"],
  datasets: [
    {
      data: [70],
      backgroundColor: "#1E62E6",
      barThickness: 16,
    },
  ],
};

return <Bar data={data} options={options} />;
`;
