import React from 'react';

function useLocalStorage(itemName, initialValue) {

  //aqui tenemos 3 estados y debemos actualizarlos e irlos retornando donde sea más conveniente
  //estos estados van a tener que consumirse en la función App
  const [item, setItem] = React.useState(initialValue);
  //aqui se debe crear un estado de carga y otro de error
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(()=> {
   setTimeout(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem ) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem);
      }

    setLoading(false);
      
    } catch (error) {
      setError(true);
      setLoading(false);
    }
   }, 2000); // tiempo en milisegundos
  }, []);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem)); // como se trabaja en localstorage, debemos guardar los todos en formato string
  
    setItem(newItem); // guarda los nuevos todos en localsotrage
  
    //después de guardar los todos, se debe actualizar el estado de los todos en las otras funciones que los usan (completeTodo, deleteTodo)
  };

  console.log(item);
  
  return{
    item, 
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage };

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
// ];

//localStorage.removeItem('TODOS_V1', defaultTodos);
//localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
