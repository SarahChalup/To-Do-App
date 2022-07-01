import React from "react";
import "./todoItem.css"



function ToDoItem(props){
   
   
    return (
        <li className="TodoItem">
            {/* Se le agrega la clase icon, icon-check, Si la tarea se completo(diferente a false), entonces agregar icon check active */}
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete} >
                √
            </span>
            {/* Si el item ya se completo (complete true)  agregar clase complete*/}
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}>
                X
            </span>
        </li>
    );
}
export {ToDoItem};