import React from "react";
import styles from "./chart.module.scss";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "2001",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "'04",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "'07",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "'10",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "'13",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "'16",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "'19'20",
    uv: 3490,
    pv: 4300,
  },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
      width={300}
      height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          contentStyle={{ background: "transparent", border: "none" }}
          labelStyle={{ display: "none" }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
