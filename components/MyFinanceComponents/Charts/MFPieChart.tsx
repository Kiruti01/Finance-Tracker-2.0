import PieChart from "@/components/ChartComponents/PieChart";
import React from "react";

interface MFPieChartProps {
  categories: {
    name: string;
    TotalAmount: number;
  }[];
}

const MFPieChart = ({ categories }: MFPieChartProps) => {
  const colors = [
    "#ba455e",
    "#004d0e",
    "#1D4ED8",
    "#c97c16",
    "#42043b",
    "#d6db4b",
  ];

  const data = {
    labels: categories.map((category) => category.name),
    datasets: [
      {
        data: categories.map((category) => category.TotalAmount),
        backgroundColor: colors.slice(0, categories.length),
        borderColor: new Array(categories.length).fill(
          "rgba(255, 255, 255, 0.7"
        ),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <PieChart data={data} />
    </div>
  );
};

export default MFPieChart;
