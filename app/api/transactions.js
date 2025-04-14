// src/pages/api/transactions.js
import connectMongoDB from '@/utils/db';
import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  amount: Number,
  date: Date,
  description: String,
  category: String,
});

const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);

export default async function handler(req, res) {
  await connectMongoDB();

  if (req.method === 'GET') {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } else if (req.method === 'POST') {
    const newTransaction = new Transaction(req.body);
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    await Transaction.findByIdAndDelete(id);
    res.status(200).json({ message: 'Transaction deleted' });
  }
}
