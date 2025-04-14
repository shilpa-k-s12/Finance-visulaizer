import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default function BudgetChart({ categories, transactions }) {
  const data = categories.map((cat) => {
    const spent = transactions.filter((txn) => txn.category === cat.name).reduce((acc, txn) => acc + txn.amount, 0);
    return { category: cat.name, budget: cat.budget, spent };
  });

  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="category" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="budget" fill="#8884d8" />
      <Bar dataKey="spent" fill="#82ca9d" />
    </BarChart>
  );
}