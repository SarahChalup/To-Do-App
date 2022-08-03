import React from "react";
import "./todoList.css"


function TodoList(props){
    return (
        <section>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodo) && props.onEmptyTodo()}
            {props.searchedTodo.map(props.render)}
            {(!props.loading && !props.searchedTodo.lenght) && props.onEmptySearchResult()}

            <ul className="ul">
                {props.children}
            </ul>
        </section>
     );
}
//para exportar el componente
export {TodoList};