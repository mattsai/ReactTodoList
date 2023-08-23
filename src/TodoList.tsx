import { TodoItem } from "./TodoItem";
import { Todo } from "./Types/Types";
import * as Types from './Types/index';
export function TodoList({ todos, functions }:  {todos: Todo[], functions:Types.TodoListFunctions}) {



    return (
        <ul className="list">
            {todos.length === 0 && "No todos"}
            {todos.map((todo: Todo) =>
                <TodoItem todo={todo} key={todo.id} functions={functions} />
            )}

            {/* <li>   
            <label >
                <input type="checkbox" />
                Item 1
            </label>
            <button className="btn btn-danger"> Delete</button>
            </li>
            <li> 
            <label >
                <input type="checkbox" />
                Item 2
            </label>
            <button className="btn btn-danger"> Delete</button>
            </li> */}
        </ul>
    )
}