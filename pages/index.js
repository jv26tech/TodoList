import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Index = () => {
    
    const [userInput, setUserInput] = useState('')

    const [todoList, setTodoList] = useState([])

    const handleChange = (e) => {
        e.preventDefault()

        setUserInput(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(userInput){
            setTodoList([
                userInput,
                ...todoList
            ]);
    
            setUserInput('')
        }
        
    }

    const handleDelete = (todo, idx) => {
        //const updatedArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo))
        let newArray = [...todoList]
        newArray.splice(idx, 1)

        setTodoList(newArray)
    }
    
    const handleEdit = (todo) => {
        todoList.splice(todoList.indexOf(todo), 1, userInput)

        setUserInput('')
        setTodoList(todoList)
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
                        return <li key={idx}>{todo}<button onClick={(e) => {
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

export default Index