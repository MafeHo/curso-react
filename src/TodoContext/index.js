import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []); // se llama a la función useLocalStorage y se le pasa el nombre del item en localstorage y el valor inicial de los todos

  const [searchValue, setSearchValue] = React.useState("");

  //crear un nuevo estado para el modal
  const [openModal, setOpenModal] = React.useState(false); //es false para que el modal por defecto esté cerrado

  //console.log('Los usuarios buscan todos de ' + searchValue);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  // console.log('log 1');

  // React.useEffect(() => {
  //   console.log('log 2');
  // }, [totalTodos])

  // console.log('log 3');

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    })
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        //se guardan las cosas en la propiedad value del provider
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        searchedTodos,
        setSearchValue,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

// nueva sintaxis para componentes
//<TodoContext.Provider></TodoContext.Provider>
//<TodoContext.Consumer></TodoContext.Consumer>

export { TodoContext, TodoProvider };
