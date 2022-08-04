import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { ToDoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import {Modal} from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoHeader } from "../TodoHeader";
import {ChangeAlert } from "../ChangeAlert";

function App() {
  const {
    error,
    loading,
    searchedTodo,
    completeTodo,
    deleteTodo,
    openModal,
    totalTodo, 
    completedTodo,
    searchValue, 
    setSearchValue,
    addTodo,
    setOpenModal,
    syncronizeTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader  loading = {loading}>
        <TodoCounter 
          totalTodo={totalTodo}
          completedTodo={completedTodo}
          />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue} 
          />
      </TodoHeader>

      <TodoList
        error = {error} 
        loading = {loading}
        totalTodo = {totalTodo}
        searchedTodo = {searchedTodo}
        searchText = {searchValue}
        onError = {()=><p>Existe un error D:</p>}
        onLoading = {()=> <p>Estamos Cargando...</p>}
        onEmptyTodo = {() =><p>Crea tu primer To Do!</p>}
        onEmptySearchResult = {(searchText) =><p>Lo siento, no hay coincidencias con {searchText}</p>}
        
        // render = {todo => (
        //   // Estos elementos se colocan dentro de props en React
        //   <ToDoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)} />
        // )}
        // />
        >
          {todo => (
            <ToDoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)} />
          )}
        </TodoList>

  
          {/* Preguntar si es que openModal es true */}
      {  !!openModal && (
           <Modal>
            <TodoForm 
              addTodo={addTodo}
              setOpenModal={setOpenModal}/>
          </Modal>
        )}

      <CreateTodoButton setOpenModal= {setOpenModal} />
      
      <ChangeAlert
        syncronize = {syncronizeTodos}/>

    </React.Fragment>
  );
}

export default App;
