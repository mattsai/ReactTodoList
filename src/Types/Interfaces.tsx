import { Todo } from "./Types";

export interface TodoItemProps{
    todo:Todo;
    key:string;
    functions:TodoListFunctions;
    
}

export interface TodoListFunctions {
    toggleTodo: (id: string, completed: boolean) => void;
    deleteTodo: (id: string) => void;
}

export interface addTodoInterface{
    addTodo: (newTodo: string) => void;
}
