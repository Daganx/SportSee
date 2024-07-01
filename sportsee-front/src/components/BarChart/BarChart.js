import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import "../BarChart/barChart.css";

const tickFormatter = (value, index) => {
  return index + 1;
};

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barGap={8} barCategoryGap={1}>
        <text
          x="60"
          y="8"
          textAnchor="middle"
          style={{ fontSize: "0.7rem", fontWeight: "bold" }}
        >
          Activités Quotidiennes
        </text>
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="right"
          wrapperStyle={{
            fontSize: 12,
            marginBottom: 10,
            top: -5,
            right: 0,
            color: "#666",
          }}
          iconType="circle"
          iconSize={8}
        />

        <CartesianGrid vertical={false} strokeDasharray="1 1" />
        <XAxis
          dataKey="day"
          tickLine={false}
          tick={{ fontSize: 14 }}
          dy={10}
          stroke="1 1"
          tickFormatter={tickFormatter}
        />
        <YAxis
          yAxisId="kilogram"
          dataKey="kilogram"
          type="number"
          tickCount={4}
          axisLine={false}
          orientation="right"
          tickLine={false}
          tick={{ fontSize: 14 }}
          dx={20}
          domain={["dataMin - 2", "dataMax + 1"]}
        />
        <YAxis
          yAxisId="calories"
          dataKey="calories"
          type="number"
          domain={["dataMin - 20", "dataMax + 10"]}
          hide={true}
        />
        <Tooltip />

        <Bar
          yAxisId="kilogram"
          dataKey="kilogram"
          name="Poids (Kg)"
          fill="#282D30"
          barSize={7}
          radius={[50, 50, 0, 0]}
        />
        <Bar
          yAxisId="calories"
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          barSize={7}
          radius={[50, 50, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
