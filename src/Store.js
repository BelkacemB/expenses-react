import React from 'react';

export const ExpenseContext = React.createContext();

const initialState = [];

export const expenseReducer = (state, action) => {
  console.log('Inside dispatcher');
  switch (action.type) {
    case 'ADD_EXPENSE':
      console.log(action.payload);
      return [...state, action.payload];
  }
};
