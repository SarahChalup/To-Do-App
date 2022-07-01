import React from "react";
import "./todoList.css"


function TodoList(todo){
    return (
        <section>
            <ul className="ul">
                {todo.children}
            </ul>
        </section>
     );
}
//para exportar el componente
export {TodoList};