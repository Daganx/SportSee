import React from "react";
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
            fontSize:"10px"
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
      <LineChart data={formattedData}>
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "white" }}
          fontSize={"10px"}
        />
        <Tooltip content={<CustomTooltip />} cursor={false} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#FFFFFF"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />
        <text x="10" y="20" fill="#FF8181" textAnchor="start" fontSize={10}>
          Durée moyenne des <tspan x="10" dy="12">sessions</tspan>
        </text>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
