const Todo = (props) => {
    const todos = props.todos;
    return (
        <>
            <ul className='todo-container'>
                {todos.map((todo) => {
                    return (
                        <li className='todo-child' key={todo.id}>{todo.title}</li>
                    )
                })

                }

            </ul>
        </>
    )
}
export default Todo;