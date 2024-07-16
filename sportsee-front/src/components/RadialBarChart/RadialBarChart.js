import React from "react";
import PropTypes from "prop-types";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const RadialBarChartScore = ({ score }) => {
  const data = [
    {
      name: "Score",
      uv: score * 100,
      fill: "#ff0000",
    },
  ];

  const endAngle = 90 + 360 * score;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#f2f2f2",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="80%"
          barSize={20}
          data={data}
          startAngle={90}
          endAngle={endAngle}
        >
          <circle cx="50%" cy="50%" r="35%" fill="#ffffff" />
          <RadialBar minAngle={15} background clockWise dataKey="uv" />
          <text
            x="50%"
            y="45%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            style={{ fontSize: 24, fontWeight: "bold" }}
          >
            {`${data[0].uv}%`}
          </text>
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-legend"
            style={{ fontSize: 12, fill: "#888888" }}
          >
            <tspan x="50%" dy="0">
              de votre
            </tspan>
            <tspan x="50%" dy="1.2em">
              objectif
            </tspan>
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

RadialBarChartScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default RadialBarChartScore;
