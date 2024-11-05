import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Hello() {
  return (
    <div>
      <h1>Hello</h1>
       <NavLink to="/todo">Todo</NavLink>
    </div>
  )
}
