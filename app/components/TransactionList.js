// src/components/TransactionList.js
export default function TransactionList({ transactions, deleteTransaction }) {
    return (
      <ul>
        {transactions.map((txn) => (
          <li key={txn._id}>
            {txn.date}: ₹{txn.amount} - {txn.description}
            <button onClick={() => deleteTransaction(txn._id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }