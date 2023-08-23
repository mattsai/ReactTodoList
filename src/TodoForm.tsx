import { FormEvent, useState } from "react"
import * as Types from './Types/index';

// type AddTodoFunction = (title: string) => void;

export function TodoForm({addTodo} : Types.addTodoInterface ){
    
    const [newItem,setNewItem] = useState("...");

    function handleSubmit(e : FormEvent<HTMLFormElement>) {
        e.preventDefault(); // prevent for refreshing
        if(newItem === "") return 
        addTodo(newItem);
        setNewItem("") //reset input

    //    setTodos((currentTodos)=> {
    //      return [...currentTodos, {
    //          id:crypto.randomUUID().toString(),
    //          title:newItem ,
    //          completed:false
    //        }];
    //    });
       
        //this dosn't work ? 
       // the second one override the first setTodos function
        //  setTodos([...todos, {id:crypto.randomUUID().toString(), completed:false}]);
       //  setTodos([...todos, {id:crypto.randomUUID().toString(), completed:false}]);
     }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item"> New Item</label>
            <input value={newItem} onChange={e=> setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
    )
}