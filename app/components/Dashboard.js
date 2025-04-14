export default function Dashboard({ transactions, categories }) {
    const totalExpenses = transactions.reduce((acc, txn) => acc + txn.amount, 0);
  
    const insights = categories.map((cat) => {
      const spent = transactions.filter((txn) => txn.category === cat.name).reduce((acc, txn) => acc + txn.amount, 0);
      if (spent > cat.budget) return `${cat.name}: Overspent by ₹${spent - cat.budget}`;
      return `${cat.name}: Within Budget`;
    });
  
    return (
      <div>
        <h2>Total Expenses: ₹{totalExpenses}</h2>
        <h3>Spending Insights:</h3>
        <ul>
          {insights.map((insight, idx) => (
            <li key={idx}>{insight}</li>
          ))}
        </ul>
      </div>
    );
  }