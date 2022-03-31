import React, { useReducer } from 'react';
import './style.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Analytics from './components/Analytics';
import { ExpenseContext, expenseReducer } from './Store';

export default function App() {
  const [state, dispatch] = useReducer(expenseReducer, []);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      <div>
        <ExpenseForm />
        <ExpenseList />
        <Analytics />
      </div>
    </ExpenseContext.Provider>
  );
}
