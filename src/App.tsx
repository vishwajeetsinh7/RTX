import React , {useState} from 'react';
import { Todo} from './todo.model'

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';



const App: React.FC = () =>  { 

  const [todos, setTodos] = useState<Todo[]>([])

  // const todos = [{id: 't1', text: 'Finishe the couse'}, {id: 't2', text: 'osdj sdf'}]

  const todoAddHandler =  (text:string) => { 
    setTodos(prevTodos => [
      ...prevTodos, 
      {id: Math.random().toString(), text:text}
    ])
  }

  const todoDeleteHandler = (todoId: string)  => { 
    setTodos(prevTodos => { 
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }


  return (
  <div className='sd'>
    <NewTodo onAddTodo = {todoAddHandler} />
    <TodoList items={todos} onDeleteTodo = {todoDeleteHandler}/>  
  </div>
  )
}


export default App;
