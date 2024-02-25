import { useState } from "react"
import style from "./form.module.css"

export default function Form({todoList, setTodoList}){
    const [todo, setTodo] = useState({name: "", done:false})

    function submitTodo(e){
        e.preventDefault()
        setTodoList([...todoList, todo])
        setTodo({name: "", done:false})
    }
    return <form className={style.form}>
    <div className={style.container}>    
        <input className={style.input} 
        onChange={(e) => setTodo({name: e.target.value, done: false})} 
        type="text" 
        placeholder="Enter To Do ..."
        value={todo.name}></input>
        <button onClick={(e) => submitTodo(e)} 
        type="submit"
        className={style.submitButton}>Submit</button>
    </div>
</form>
}