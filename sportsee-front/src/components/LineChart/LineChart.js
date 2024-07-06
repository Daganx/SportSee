import React from "react";
import PropTypes from "prop-types";
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from "recharts";

const LineChartComponent = ({ data }) => {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const formattedData = data.map((session) => ({
    ...session,
    day: days[session.day - 1],
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip-linechart"
          style={{
            backgroundColor: "white",
            padding: "5px",
            color: "black",
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={formattedData}
        margin={{ top: 50, right: 5, left: 5, bottom: 0 }}
      >
        <defs>
          <linearGradient id="gradientLine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF8484" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#FF8484" }}
          fontSize={"10px"}
        />
        <Tooltip content={<CustomTooltip />} cursor={false} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="url(#gradientLine)"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 2 }}
        />
        <text x="10" y="20" fill="#FF8484" textAnchor="start" fontSize={10}>
          Durée moyenne des{" "}
          <tspan x="10" dy="12">
            sessions
          </tspan>
        </text>
      </LineChart>
    </ResponsiveContainer>
  );
};

LineChartComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default LineChartComponent;
