import { FormEvent, useEffect, useState } from "react"
import "./styles.css"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { Todo } from "./Types/Types";
export default function App() {

 //Structure: Hooks, Function-code-logic - return jsx||tsx
  //type;(initialState)
  const [todos, setTodos] = useState<Todo[]>(()=>{
    const localStorageValue  = localStorage.getItem("ITEMS");
    if(localStorageValue == null ) return [];
    return JSON.parse(localStorageValue);
  });

  // setNewItem("sjsjjsjs");

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos])




  function addTodo(title: string) {
    setTodos((currentTodos) => {
      return [...currentTodos, {
        id: crypto.randomUUID().toString(),
        title: title,
        completed: false
      }];
    });
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo: Todo) => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo;
      })
    })
  }
  function deleteTodo(id: string) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo: Todo) => {
        if (todo.id !== id) return todo;
      })
    })
  }





  console.log('todos', todos)

  return (
    <>
      <TodoForm addTodo={addTodo} />

      <h1 className="header"> Todo List</h1>
      <TodoList todos={todos} functions={{ toggleTodo, deleteTodo }} />


    </>
  )
}

