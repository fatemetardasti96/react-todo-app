import { useState } from "react"
import TodoCart from "./TodoCart"
import Form from "./Form"
import Footer from './Footer'


export default function Todo(){
    const [todoList, setTodoList] = useState([])
    const totalItems = todoList.length
    const completedItems = todoList.filter((todo) => todo.done===true).length
    return <div>

    <Form todoList={todoList} setTodoList={setTodoList}/>    
    
    <TodoCart key={todoList} todoList={todoList} setTodoList={setTodoList} />
    
    <Footer completedItems={completedItems} totalItems={totalItems}/>
    </div>
}