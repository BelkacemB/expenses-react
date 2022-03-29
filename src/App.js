import React, { useState, useEffect } from 'react';
import './style.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Analytics from './components/Analytics';
import Store from './Store';
export default function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    console.log('Adding expense to the list!');
    setExpenses([...expenses, expense]);
  };

  return (
    <Store>
      <div>
        <ExpenseForm handleAddExpense={handleAddExpense} />
        <ExpenseList expenseList={expenses} />
        <Analytics expenseData={expenses} />
      </div>
    </Store>
  );
}
