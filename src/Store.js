import React from 'react';

// Create a context
let MyContext = React.createContext([]);

// Create the global state

// create the reducer (should contain a switch and ADD_EXPENSE action)

// Make the context a higher order compenent
export default function Store(props) {
  return (
    <MyContext.Provider>
      <p>(This page is wrapped in context)</p>
      {props.children}
    </MyContext.Provider>
  );
}
