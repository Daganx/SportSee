import React from "react";
import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 40,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <text
          x="30px"
          y="25px"
          style={{ fontSize: 12, fontWeight: "bold", fill: "#000000" }}
        >
          Activité quotidienne
        </text>
        <Tooltip />
        <CartesianGrid strokeDasharray="1 3" />

        <Bar dataKey="kilogram" name="Poids (kg)" fill="#000000" />
        <Bar dataKey="calories" name="Calories brûlées (kCal)" fill="#ff2501" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
