import *as React from 'react'
import { useSelector } from "react-redux";
import { RootState } from "./Reducer";
import { useState,useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from './Reducer/Actions/action';

const TodoList = () => {
    const todolist = useSelector((state:RootState) => state.todo.todo);
    const dispatch = useDispatch();
    const removeTodo = useCallback(()=> dispatch((deleteTodo())),[dispatch])

    if (todolist.length === 0) return <p>등록된 todo가 없슴다</p>

    return(
        <>
            <span onClick={removeTodo}>(X)</span>
            {todolist.map((v)=>{
                return (
                    <li>
                        <span>{v}</span>
                    </li>
                )
            })}
        </>
    )
}

export default TodoList