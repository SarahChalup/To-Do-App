import React from "react";
import "./TodoCounter.css";

function TodoCounter({
    totalTodo, 
    completedTodo,
    loading
} ){

    return (
        <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading" }` }>
        He completado {completedTodo} de {totalTodo} To Do
        </h2>
    );
}
//para exportar el componente
export {TodoCounter};