import React from 'react'
import TodoModel from '../Models/TodoModel'
import { useSelector } from 'react-redux'
import Card from './card'
import { NavLink } from 'react-router-dom'

export default function Grid() {
  const todoList:TodoModel[] = useSelector((state:any) => state.todoList.todos)

  return (
    <>
    <div className="grid">
      {todoList.map((todo) => <Card todo={todo} key={todo.id}/>)}
    </div>
    <NavLink to='/'>Home</NavLink>
    </>
  )
}
