import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './Reducer/Actions/action'
import { useState,useCallback } from 'react'
const Todo = () => {
    const [value,setValue] = useState("");
    const dispatch = useDispatch();
    const updateTodo = useCallback(
        (todo:string) => dispatch(addTodo({todo:todo})),[dispatch]
    )

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const OnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateTodo(value);
        setValue("");
    } 
  return (
    <div>
        <form onSubmit={OnSubmit}>
            <input type="text" value={value} onChange={onChange} />
            <button type='submit'>등록</button>
        </form>
    </div>
  )
}

export default Todo