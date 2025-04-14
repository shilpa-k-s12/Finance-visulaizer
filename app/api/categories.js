import connectMongoDB from '@/utils/db';
import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: String,
  budget: Number,
});

const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema);

export default async function handler(req, res) {
  await connectMongoDB();

  if (req.method === 'GET') {
    const categories = await Category.find();
    res.status(200).json(categories);
  } else if (req.method === 'POST') {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json(newCategory);
  }
}