// src/components/TransactionForm.js
import { useState } from 'react';

export default function TransactionForm({ addTransaction }) {
  const [form, setForm] = useState({ amount: '', date: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.amount || !form.date) return alert("All fields are required");
    addTransaction(form);
    setForm({ amount: '', date: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />
      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}