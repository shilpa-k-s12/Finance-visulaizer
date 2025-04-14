import { PieChart, Pie, Cell } from 'recharts';

export default function CategoryChart({ transactions }) {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const data = transactions.reduce((acc, txn) => {
    const idx = acc.findIndex((d) => d.category === txn.category);
    if (idx === -1) acc.push({ category: txn.category, value: txn.amount });
    else acc[idx].value += txn.amount;
    return acc;
  }, []);

  return (
    <PieChart width={400} height={300}>
      <Pie data={data} dataKey="value" nameKey="category" cx="50%" cy="50%" outerRadius={100}>
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}