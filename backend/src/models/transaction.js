import mongoose from "mongoose";

const Transaction = new mongoose.Schema({
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  time: {
    type: String,
    default: new Date(),
  },
  category: {
    type: String,
    enum: ["Food", "travel", "Entertainment"],
    required: true,
  },
  description: { type: String, required: true },
});
const Expense = mongoose.model("Expense", Transaction);
export default Expense;
