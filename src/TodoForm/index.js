import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext)

    //aqui vamos a crear un nuevo estado LOCAL no global, para guardar el valor del input
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return(
        //cuando un botón está dentro de un form el ultimo botón por defecto es de tipo submit, entonces en el evento onSubmit del form es donde se puede controlar el evento de click de ese botón
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Cortar la cebolla para el almuerzo" 
                value={newTodoValue}
                onChange={onChange}
            />

            <div className="TodoForm-buttonContainer">
                <button 
                type="button"
                className="TodoForm-button
                TodoForm-button--cancel"
                onClick={onCancel}
                >Cancelar</button>
                <button className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
            
        </form>
    )
}

export { TodoForm };