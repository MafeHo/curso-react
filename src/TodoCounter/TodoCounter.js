import { TodoContext } from '../TodoContext';
import './TodoCounter.css'
import React from 'react';

function TodoCounter(){

  const {
    completedTodos: completed,
    totalTodos: total
  } = React.useContext(TodoContext)

    return (
      <h1 className='TodoCounter'>
        Has completado <span>{completed}</span> de <span>{total}</span> TODOs
      </h1>
    );
}

export { TodoCounter };