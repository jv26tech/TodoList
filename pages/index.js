import axios from 'axios';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Index = ({tarefas}) => {
    
    const [userInput, setUserInput] = useState('')

    const [todoList, setTodoList] = useState(tarefas)

    const handleChange = (e) => {
        e.preventDefault()

        setUserInput(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(userInput){
            setTodoList([
                {description: userInput},
                ...todoList
            ]);
    
            setUserInput('')
            const response = axios.post('http://localhost:3000/tarefas/cadastrar', {description: userInput, completed:false}, { headers: { "Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json' }})
        }
        
    }

    const handleDelete = (todo, idx) => {
        //const updatedArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo))
        let newArray = [...todoList]
        newArray.splice(idx, 1)
        const response = axios.post('http://localhost:3000/tarefas/deletar', todo, { headers: { "Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json' }})
        setTodoList(newArray)
    }
    
    const handleEdit = (todo) => {
        todoList.splice(todoList.indexOf(todo), 1, userInput)
        setUserInput('')
        setTodoList(todoList)
        const response = axios.post('http://localhost:3000/tarefas/editar', [todo, userInput], { headers: { "Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json' }})
        
    }
   
   
    return (
        <div>
            <h3>NextJS Todo List</h3>
            <form>
                <input type="text" value={userInput} placeholder='Enter a todo item' onChange={handleChange}/><button onClick={handleSubmit}>Submit</button>
            </form>
            <ul>
                {
                    todoList.length >=1 ? todoList.map((todo, idx) => {
                        return <li key={idx}>{todo.description}<button onClick={(e) => {
                            e.preventDefault()
                            handleDelete(todo, idx)
                        }}>Delete</button><button onClick={(e) => {
                            e.preventDefault()
                            handleEdit(todo)
                        }}>Edit</button></li>
                    })
                    : 'Enter a todo item'
                }
            </ul>
        </div>
    )
}
export const getServerSideProps = async (ctx) => {
    const response = await axios.get('http://localhost:3000/tarefas/listar')
    return {
      props: {tarefas: response.data},
    };
};

export default Index