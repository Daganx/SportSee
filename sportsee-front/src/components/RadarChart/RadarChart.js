import React from "react";
import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const PerformanceRadarChart = ({ performanceData, kind }) => {
  const formattedData = performanceData.map((item) => ({
    ...item,
    kind: kind[item.kind],
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="60%" data={formattedData}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="kind"
          fontSize={"7.6px"}
          tick={{ fill: "white" }}
        />
        <Radar
          name="Performance"
          dataKey="value"
          stroke="#ff0000"
          fill="#ff0000"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

PerformanceRadarChart.propTypes = {
  performanceData: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  kind: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PerformanceRadarChart;
