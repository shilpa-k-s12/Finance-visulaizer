"use client";

import { useState, useEffect } from 'react';
import TransactionForm from '@/components/TransactionForm';
import TransactionList from '@/components/TransactionList';
import ExpenseChart from '@/components/ExpenseChart';
import CategoryChart from '@/components/CategoryChart';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/transactions')
      .then((res) => res.json())
      .then(setTransactions);
    fetch('/api/categories')
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  const addTransaction = async (txn) => {
    const res = await fetch('/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(txn),
    });
    const newTxn = await res.json();
    setTransactions((prev) => [...prev, newTxn]);
  };

  return (
    <div>
      <h1>Personal Finance Visualizer</h1>
      <TransactionForm addTransaction={addTransaction} categories={categories} />
      <TransactionList transactions={transactions} />
      <ExpenseChart transactions={transactions} />
      <CategoryChart transactions={transactions} />
      <Dashboard transactions={transactions} categories={categories} />
    </div>
  );
}