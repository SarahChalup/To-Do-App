import React from "react";
//import './App.css';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { ToDoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext"

function AppUI() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      {/* Para consumir los datos primero debemos llamar al consumidor */}
      <TodoContext.Consumer>
        {({
          error,
          loading,
          searchedTodo,
          completeTodo,
          deleteTodo,
          totalTodo,
        }) => (
          <TodoList>
            {error && <p>Existe un error D:</p>}
            {loading && <p>Estamos Cargando...</p>}
            {(!loading && !totalTodo) && <p>Crea tu primer To Do!</p>}

            {searchedTodo.map(todo => (
              // Estos elementos se colocan dentro de props en React
              <ToDoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)} />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export { AppUI }; 