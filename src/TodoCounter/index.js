import React from "react";
import "./TodoCounter.css";

function TodoCounter({total, completed}){
    return (
        <h2 className="TodoCounter">He completado {completed} de {total} To Do's</h2>
    );
}
//para exportar el componente
export {TodoCounter};