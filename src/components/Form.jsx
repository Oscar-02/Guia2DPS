import React, {useState} from 'react'
import Todo from '../components/Todo.jsx'

const Form = () => {
    const [todo, setTodo] = useState({}) // [state, setState
    const [todos, setTodos] = useState([
      {todo: 'todo 1'},
      {todo: 'todo 2'},
      {todo: 'todo 3'}
    ])
    const handleChange = (e) => setTodo({[e.target.name]: e.target.value})
    const handleClick = (e) => {
        if (Object.keys(todo).length === 0 || todo.todo.trim() === '') {
            alert('El campo no puede estar vacío')
            return
        }
        setTodos([...todos, todo])
    }

    const deleteTodo = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <>
        <form onsubmit={e => e.preventDefault()}>
            <label htmlFor="">Agregar tarea</label><br />
            <input type="text" name="todo" onChange={handleChange} />
            <button onClick={handleClick}>Agregar</button>
        </form>
        {
            todos.map((value, index) => (
                <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>
               ))
        }
        </>

        
     )
};

export default Form