import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Hello() {
  return (
    <div className="hello">
      <h1 className="title">Hello</h1>
       <NavLink to="/todo">Todo</NavLink>
    </div>
  )
}
