import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter(){

    const {
        totalTodo, 
        completedTodo,
    } = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">He completado {completedTodo} de {totalTodo} To Do's</h2>
    );
}
//para exportar el componente
export {TodoCounter};