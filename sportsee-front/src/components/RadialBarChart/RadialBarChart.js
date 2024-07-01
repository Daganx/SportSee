import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RadialBarChartScore = ({ score }) => {
  const data = [
    {
      name: "Score",
      uv: score * 100,
      fill: "#ff0000",
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="70%"
        outerRadius="80%"
        barSize={10}
        data={data}
        startAngle={90}
        endAngle={-270}
      >
        <RadialBar minAngle={15} background clockWise dataKey="uv" />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
          style={{ fontSize: 18, fontWeight: "bold" }}
        >
          {`${data[0].uv}%`}
        </text>
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            lineHeight: "24px",
          }}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialBarChartScore;
