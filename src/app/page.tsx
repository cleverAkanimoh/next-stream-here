import ListItem from "@/Components/ListItem";
import { prisma } from "@/db";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
  'use server'

  await prisma.todo.update({ where: { id }, data: { complete } })
}

async function deleteTodo(id: string) {
  'use server'

  await prisma.todo.delete({ where: { id }, })
}

async function deleteReadTodo() {
  'use server'

  await prisma.todo.deleteMany({ where: { complete: true }, })
}

async function deleteAllTodos() {
  'use server'

  await prisma.todo.deleteMany()
}

export default async function Home() {
  const todos = await getTodos()

  return (
    <main className="w-[84%] flex flex-col items-center justify-enter">

      <header className="w-full flex items-center justify-between my-5">
        <h1 className="text-2xl"><span className="font-bold">Next</span> Todos</h1>

        <Link href='new' className="border rounded p-2 outline-none hover:bg-slate-700 focus-within:bg-slate-700 capitalize">create todo</Link>
      </header>

      <ul className="w-full my-5">
        {
          todos.map((todo: { id: string; title: string; complete: boolean; }) => <ListItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)
        }
      </ul>

      <div>
        <button className="rounded p-2 outline-none hover:bg-slate-700 focus:bg-slate-700 capitalize transition-all duration-300" onClick={deleteReadTodo}>clear all read todos</button>
        
        <button className="rounded p-2 outline-none hover:bg-slate-700 focus:bg-slate-700 capitalize transition-all duration-300" onClick={deleteAllTodos}>clear all todo</button>
      </div>

    </main>
  )
}
