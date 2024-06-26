import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodosLoading } from '../TodosLoading/index';
import { TodosError } from '../TodosError/index';
import { EmptyTodos } from '../EmptyTodos/index';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm/index';

function AppUI() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

    return (
        <>
          <TodoCounter/>
          <TodoSearch/>
    
         
              <TodoList>
              {/* después del '&&' crear un componente para que este tenga la lóogica de carga y error */}
              {loading && (
                <>
                  <TodosLoading />
                  <TodosLoading />
                  <TodosLoading />
                </>
              )}
              {error && <TodosError/>}
              {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

              {searchedTodos.map(todo => (
                <TodoItem 
                  key={todo.text} 
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>

          <CreateTodoButton 
            setOpenModal={setOpenModal}
          />

          {openModal && (
            <Modal>
             <TodoForm />
              
            </Modal>
          )}
    
        </>
      );

}

export { AppUI };

