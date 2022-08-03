import React from "react";
import "./TodoCounter.css";

function TodoCounter({
    totalTodo, 
    completedTodo,
} ){

    return (
        <h2 className="TodoCounter">He completado {completedTodo} de {totalTodo} To Do's</h2>
    );
}
//para exportar el componente
export {TodoCounter};