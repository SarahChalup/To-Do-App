import React from "react";
import "./TodoForm.css"

function TodoForm({
    addTodo,
    setOpenModal,
} ){

    //estado local
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
       // alert("Se ha añadido la tarea");
       event.preventDefault();
       addTodo(newTodoValue);
       setOpenModal(false);
    }
   
    return(
        <form onSubmit={onSubmit} >
            <label>
                Escribe tus tareas por hacer!
            </label>
            <textarea 
                placeholder="Lavar la ropa blanca"
                value={newTodoValue}
                onChange={onChange}/>
            <div className="TodoForm-buttonContainer">
                <button 
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}>
                        Cancelar
                </button>
                <button 
                    className="TodoForm-button TodoForm-button--add"
                    type="submit"
                >
                        Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm};