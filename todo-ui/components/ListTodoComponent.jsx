import React, { useEffect, useState } from 'react'
import { getAllTodos } from '../src/services/TodoService';
import { useNavigate } from 'react-router-dom';

const ListTodoComponent = () => {

    useEffect(() => {
        listTodos();
    }, [])

    const navigate = useNavigate();


    function listTodos(){
        getAllTodos().then((response) => {
            setTodos(response.data);
        }).catch(error => {
            console.error(error);
        })
    }
    
    const [todos, setTodos] = useState([]);

    function addNewTodo(){
        navigate('/add-todo')
    }

    function updateTodo(id){
        console.log(id)
        navigate(`/update-todo/${id}`)
    }

    
  return (
    <div className='container'>
        <h2 className='text-center'>List of Todos</h2>
        <button className='btn btn-primary mb-2' onClick={addNewTodo}>Add Todo</button>
        <div>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Todo Title</th>
                        <th>Todo Description</th>
                        <th>Todo Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    todos.map(todo =>
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>{todo.completed ? 'Yes' : 'No'}</td>
                            <td>
                                <button className='btn btn-primary' onClick={() => updateTodo(todo.id)}>Update</button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListTodoComponent