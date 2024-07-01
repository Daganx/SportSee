import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const tickFormatter = (value, index) => {
  return index + 1;
};

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barGap={8} barCategoryGap={1}>
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
          tickCount="4"
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
          fill="#282D30"
          barSize={7}
          radius={[50, 50, 0, 0]}
        />
        <Bar
          yAxisId="calories"
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          radius={[50, 50, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
