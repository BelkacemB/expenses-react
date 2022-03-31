import React, { useContext } from 'react';
import { ExpenseContext } from '../Store';

export default function ExpenseList() {
  const { state } = useContext(ExpenseContext);
  console.log('State from event list :');
  console.log(state);

  let expenseList = state;

  return (
    <div>
      {expenseList?.length > 0 && (
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
