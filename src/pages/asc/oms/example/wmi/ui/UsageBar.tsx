import type { Chart } from "chart.js";
import { Bar } from "react-chartjs-2";

const UsageBar = ({ label, usage }: { label?: string; usage: number }) => {
  const graphColorFunc = (usage: number) => {
    if (usage > 90) return "#FF2727"; // 위험
    if (usage > 70) return "#FA6400"; // 경고
    return "#1E62E6"; // 정상
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { min: 0, max: 100, display: false },
      y: { display: false },
    },
    plugins: {
      legend: { display: false },
    },
    animation: {
      duration: 400,
      easing: "easeOutQuart" as const,
    },
  };

  const innerBarText = {
    id: "innerBarText",
    afterDatasetsDraw(chart: Chart) {
      const { ctx, data, chartArea } = chart;
      const value = data.datasets[0].data[0];

      const xPos = chartArea.left + 10;
      const yPos = (chartArea.top + chartArea.bottom) / 2 + 5; // 중앙 기준

      ctx.save();
      ctx.font = "bold 13px sans-serif";
      ctx.fillStyle = "white";
      ctx.fillText(`${value}%`, xPos, yPos);
      ctx.restore();
    },
  };

  const data = {
    labels: [label],
    datasets: [
      {
        data: [usage],
        backgroundColor: graphColorFunc(usage),
        borderRadius: 5,
        barThickness: 40,
      },
    ],
  };

  return (
    <div
      style={{
        width: "80%",
        height: 40,
        marginBottom: 12,
        background: "#bdbdbd",
        borderRadius: 5,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <Bar data={data} options={options} height={40} plugins={[innerBarText]} />
    </div>
  );
};

export default UsageBar;
