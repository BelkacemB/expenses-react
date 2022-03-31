import React, { useContext } from 'react';
import { ExpenseContext } from '../Store';

export default function Analytics() {
  let expensesByCategory = [];

  let { state } = useContext(ExpenseContext);
  let expenseData = state;

  let categories = [...new Set(expenseData.map((item) => item.type))];

  if (expenseData !== 'undefined') {
    for (let cat of categories) {
      let sumCatExpenses = expenseData
        .filter((e) => e.type === cat)
        .reduce((a, b) => a + b.amount, 0);

      expensesByCategory = [
        ...expensesByCategory,
        { category: cat, sum: sumCatExpenses },
      ];
    }
  }

  return (
    <div>
      {expenseData.length > 0 && (
        <React.Fragment>
          <h1>Analytics</h1>
          <ul>
            {expensesByCategory.map((e) => {
              return (
                <li>
                  <b>Category:</b> {e.category}, <b>Total expenses:</b> {e.sum}{' '}
                </li>
              );
            })}
          </ul>
        </React.Fragment>
      )}
    </div>
  );
}
