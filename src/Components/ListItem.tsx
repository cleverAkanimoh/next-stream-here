'use client'

import { BsTrash } from "react-icons/bs"

type ListItemProps = {
    id: string
    title: string
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
    deleteTodo: (id: string) => void
}

const ListItem = ({ id, title, complete, toggleTodo, deleteTodo }: ListItemProps) => {
    return (
        <li className="w-full flex items-center text-2xl">
            <input
                type="checkbox"
                id={id}
                defaultChecked={complete}
                onChange={e => toggleTodo(id, e.target.checked)}
                className="cursor-pointer mr-2 peer" />

            <label
                htmlFor={id}
                className="cursor-pointer peer-checked:line-through peer-checked:text-slate-400 flex-1 p-1"
            >
                {title}
            </label>
            <span onClick={e => deleteTodo(id)} className="cursor-pointer hover:text-red-400"><BsTrash /></span>
        </li>
    )
}

export default ListItem