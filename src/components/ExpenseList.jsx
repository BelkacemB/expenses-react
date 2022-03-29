import React from 'react';

export default function ExpenseList({ expenseList }) {
  return (
    <div>
      {expenseList.length > 0 && (
        <React.Fragment>
          <h1>Expenses list</h1>
          <ul>
            {expenseList.map((e, i) => {
              i++;
              return (
                <li key={i}>
                  Type: {e.type}, amount: {e.amount}{' '}
                </li>
              );
            })}
          </ul>
        </React.Fragment>
      )}
    </div>
  );
}
