import React from "react";
import "./todoItem.css";
import {CompleteIcon} from "../TodoIcon/CompleteIcon";
import {DeleteIcon} from "../TodoIcon/DeleteIcon";


function ToDoItem(props){
   
   
    return (
        <li className="TodoItem">
            {/* Se le agrega la clase icon, icon-check, Si la tarea se completo(diferente a false), entonces agregar icon check active */}
            <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete}
                />
            {/* Si el item ya se completo (complete true)  agregar clase complete*/}
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <DeleteIcon
                onDelete={props.onDelete}
            />
        </li>
    );
}
export {ToDoItem};