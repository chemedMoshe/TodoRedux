import TodoModel from '../Models/TodoModel'
import { useSelector } from 'react-redux'
import Card from './card'
import { NavLink } from 'react-router-dom'

export default function Grid() {
  const todoList:TodoModel[] = useSelector((state:any) => state.todoList.todos)

  return (
    <>
    <NavLink to='/'>Home</NavLink>
    <div className="titleTodo">
    <h1>Todo List</h1>
    </div>
    <div className="grid">
      {todoList.map((todo) => <Card todo={todo} key={todo.id}/>)}
    </div>
    </>
  )
}
