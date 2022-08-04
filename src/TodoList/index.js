import React from "react";
import "./todoList.css"


function TodoList(props){
    const renderfun = props.children || props.render

    return (
        <section>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodo) && props.onEmptyTodo()}
           
            {(!!props.totalTodo  && !props.searchedTodo.lenght) && props.onEmptySearchResult(props.searchText)}
            {(!props.loading && !props.error) 
                && props.searchedTodo.map(renderfun)}
           
        </section>
     );
}
//para exportar el componente
export {TodoList};