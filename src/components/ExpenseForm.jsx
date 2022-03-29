import React, { useState, useEffect } from 'react';
import Expense from '../model/Expense';

export default function ExpenseForm({ handleAddExpense }) {
  const [currentExpense, setCurrentExpense] = useState(
    new Expense('housing', 50)
  );

  const handleChange = (e) => {
    let property = e.target.name;
    let value =
      property === 'amount' ? parseInt(e.target.value) : e.target.value;

    let expense = { ...currentExpense, [property]: value };
    console.log(expense);
    setCurrentExpense(expense);
  };

  return (
    <div>
      <h1>Add expense </h1>
      <input
        type="number"
        id="amount"
        name="amount"
        min="10"
        max="100"
        value={currentExpense.amount}
        onChange={handleChange}
      />
      <select
        name="type"
        id="type"
        value={currentExpense.type}
        onChange={handleChange}
      >
        <option value="food">Food</option>
        <option value="housing">Housing</option>
        <option value="entertainment">Entertainment</option>
        <option value="bills">Bills</option>
      </select>
      <button type="submit" onClick={() => handleAddExpense(currentExpense)}>
        {' '}
        Save
      </button>
    </div>
  );
}
