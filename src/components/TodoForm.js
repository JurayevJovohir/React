import React, {useState} from "react";

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);
        setValue(""); 
    }
    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <input className="todo-input" 
            type="text"
            value={value} 
            placeholder="What is the task today ?"
            onChange={(e) => setValue(e.target.value)}/>
            <button className="todo-btn" type="submit">
             Add   
            </button>
        </form>
    )
}