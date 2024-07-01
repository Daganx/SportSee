import React from "react";
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from "recharts";

const LineChartComponent = ({ data }) => {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const formattedData = data.map((session) => ({
    ...session,
    day: days[session.day - 1],
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={formattedData}>
        <XAxis dataKey="day" tickLine={false} />
        <Tooltip/>
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
