import React, {useRef} from 'react'

import './NewTodo.css.css'

type NewTodoProps  = { 
    onAddTodo: (todoText: string) => void
}


const NewTodo: React.FC<NewTodoProps> = props => { 

const textInputRef = useRef<HTMLInputElement>(null) 

const todoSubmitHandler = (event: React.FormEvent) => { 
    event.preventDefault()
    const enteredText = textInputRef.current!.value
    console.log(enteredText)
    props.onAddTodo(enteredText)

}


return   (
    <div> 
        <form onSubmit={todoSubmitHandler}>
            <div className='form-control'> 
                <label htmlFor="todo-text">Todo Text</label>
                <input ref={textInputRef} type="text" name="" id="todo-text" />
            </div>
            <div> 
                <button type="submit">Add</button>
            </div>
        </form>
    </div>
)

}
export default  NewTodo