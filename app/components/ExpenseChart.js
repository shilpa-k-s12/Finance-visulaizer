// src/components/ExpenseChart.js
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default function ExpenseChart({ transactions }) {
  const data = transactions.map((txn) => ({
    date: new Date(txn.date).toLocaleDateString('en-US', { month: 'short' }),
    amount: txn.amount,
  }));

  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="amount" fill="#8884d8" />
    </BarChart>
  );
}