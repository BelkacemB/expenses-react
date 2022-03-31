import React, { useReducer } from 'react';
import './style.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Analytics from './components/Analytics';
import { ExpenseContext } from './Store';

const expenseReducer = (state, action) => {
  console.log('Inside dispatcher');
  switch (action.type) {
    case 'ADD_EXPENSE':
      console.log(action.payload);
      return [...state, action.payload];
  }
};

export default function App() {
  const [state, dispatch] = useReducer(expenseReducer, [
    { type: 'food', amount: 60 },
  ]);

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
