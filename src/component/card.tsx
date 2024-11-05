import { useDispatch } from "react-redux"
import TodoModel from "../Models/TodoModel"
import { changeStatusTodo } from "../redux/slices"

interface Props {
    todo: TodoModel
}

export default function Card({ todo }: Props) {
    const dispatch = useDispatch()
    const changeStatusTodoo = () => {
        
        dispatch(changeStatusTodo(todo))
    }

    return (
        <div className="card">
            {todo.title}
            <input
                type="checkbox"
                onChange={()=>changeStatusTodoo()}
                checked={todo.completed}
            ></input>

        </div>
    )
}
