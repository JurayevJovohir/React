import React, {useState} from "react";

export const EditTodo = ({editTodo, task}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id);
        setValue(""); 
    }
    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <input className="todo-input" 
            type="text"
            value={value} 
            placeholder="Update task"
            onChange={(e) => setValue(e.target.value)}/>
            <button className="todo-btn" type="submit">
             Update Task  
            </button>
        </form>
    )
} 