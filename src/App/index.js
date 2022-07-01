import React from "react";
import { AppUI } from "./AppUI";


import "../TodoSearch";
import "../TodoList";
import "../TodoItem";
import "../CreateTodoButton";


// const defaulttodos=[
//   {text:'Cortar cebolla', completed:false},
//   {text:'Tormar el curso de intro a react', completed:true},
//   {text:'Llorar con la llorona', completed:false}
// ];

//Creando un customHoock
function useLocalStorage(itemName, initialValue) {
  //estado de error
  const [error, setError] = React.useState(false);
  //estado de carga
  const [loading, setLoading] = React.useState(true);
   // ¡Podemos utilizar otros hooks!
  const [item, setItem] = React.useState(initialValue);

  //simulando tiempo de espera de carga
  React.useEffect(() =>{
    setTimeout(() => {
      try{
         // Guardamos nuestro item en una constante
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

          // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
        if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else {
            parsedItem = JSON.parse(localStorageItem);
          }

          setItem(parsedItem);
          setLoading(false);
      } catch(error){
          setError(error);
      }
    }, 1000)
  })


 

 

  // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
const saveItem = (newItem) => {
  try{
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  } catch(error){
    setError(error);
  }

  };

  // Regresamos los datos que necesitamos
return {
    item,
    saveItem,
    loading,
    error,
};
}



function App() {
 
  //Estados
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  
  //variables del contador
  //filtrando los todo para ver cuales son verdaderos     !!devulve falso si es falso
  const completedTodo = todos.filter(todo => !!todo.completed).length;
  const totalTodo = todos.length;

  //variables de la búsqueda
  let searchedTodo = [];
  if (searchValue.length < 1){
    //si el input esta vacio
    searchedTodo = todos;
  } else{
    //buscar los to dos
    searchedTodo = todos.filter(todo => {
      const searchText = searchValue.toLowerCase();
      const todoText = todo.text.toLowerCase();
      return todoText.includes(searchText);
    })
  }

 
  //completar todo
  const completeTodo = (text) => {
    //marcar el todo indicado como completado
    const todoIndex = todos.findIndex(
      todo => todo.text === text );
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    //actualizar estado
    saveTodos(newTodos);
  }

//Borrar Todo
const deleteTodo = (text) => {
  //eliminar el todo indicado
  const todoIndex = todos.findIndex(
    todo => todo.text === text
  );
  const newTodos = [...todos];
  newTodos.splice(todoIndex, 1);
  saveTodos(newTodos);
};

console.log("render antes de use effect")
//efectos
React.useEffect(() => {
  console.log("use effect");
},[totalTodo]);


  return (
   <AppUI 
   loading={loading}
   error={error}
   totalTodo={totalTodo}
   completedTodo={completedTodo}
   searchValue={searchValue}
   setSearchValue={setSearchValue}
   searchedTodo={searchedTodo}
   completeTodo={completeTodo}
   deleteTodo={deleteTodo}
   />
  );
}

export default App;
