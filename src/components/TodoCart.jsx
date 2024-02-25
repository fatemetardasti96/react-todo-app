import style from "./todocart.module.css"

export default function TodoCart({todoList, setTodoList}){
    function handleDeleteButton(item){
        console.log("Delete button pressed", item)
        setTodoList(
            todoList.filter((todo) => todo !== item)
        )
    }
    function handleDone(item){
        setTodoList(
            todoList.map(
                (todo) => todo.name === item.name ? {...todo, done:!todo.done}:todo
            )
        )
        console.log("Task Done!", item)

    }
    const sortedTodos = todoList.slice().sort((a, b) => Number(a.done)-Number(b.done))
    return <div 
                className={style.card}
                key={todoList}>
                {sortedTodos.map(item => 
                    (<div key={item} 
                          className={style.item}
                          >
                            <span onClick={() => handleDone(item)}
                            className={item.done?style.completed:""}>
                            {item.name}                                
                            </span>
                        <button 
                            onClick={() => handleDeleteButton(item)}
                            className={style.deleteButton}>
                        x
                        </button>
                    <hr className={style.line}/>
                    </div>))}
            </div>
}