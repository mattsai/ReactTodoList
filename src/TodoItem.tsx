import * as Types from './Types/index';

export function TodoItem({todo,functions}: Types.TodoItemProps) {
    

    return (
        <li>
            <label >
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={e =>
                        functions.toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
            </label>
            <button onClick={() => functions.deleteTodo(todo.id)} className="btn-delete"> Delete</button>
        </li>
    )

}