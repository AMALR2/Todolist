import React, { useState, useEffect } from "react"
import axios from 'axios'
import Button from "../../../../forms/button/index"
import { TodoListItem } from "./TodoListItem"
interface TodoListProps {
    setTitle: React.Dispatch<React.SetStateAction<string>>
    setEdit:React.Dispatch<React.SetStateAction<boolean>>
    setEditId:React.Dispatch<React.SetStateAction<number>>
  }
interface TodoItem {
    id: number
    title: string
    status: number
}

const TodoList: React.FC<TodoListProps> = ({setTitle,setEdit,setEditId}) => {
    const [allList, setAllList] = useState<TodoItem[]>([])
    const [doneList, setDoneList] = useState<TodoItem[]>([])
    const [todoList, setTodoList] = useState<TodoItem[]>([])
    const [currentList, setCurrentList] = useState<TodoItem[]>([])
    useEffect(() => {
        fetchData()

    }, [])
    const filterHandler = (list: TodoItem[]) => {
        setCurrentList(list)
    }
    const fetchData=()=>{
        axios.get('http://localhost:3000/api/')
            .then((res) => {
                setAllList(res.data)
                setDoneList(res.data?.filter((item: TodoItem) => item.status === 1))
                setTodoList(res.data?.filter((item: TodoItem) => item.status === 0))
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className="col-10 py-3">
            <h2 className="text-center">Todo List</h2>
            <div className="row justify-content-between">
                <Button buttonValue={"All"} additionalClass={"bg-aqua w-25"} onClick={() => filterHandler(allList)} />
                <Button buttonValue={"Done"} additionalClass={"bg-aqua w-25"} onClick={() => filterHandler(doneList)} />
                <Button buttonValue={"Todo"} additionalClass={"bg-aqua w-25"} onClick={() => filterHandler(todoList)} />
            </div>
            <ul className="list-group">
                {currentList.map((item: TodoItem) => (
                    <TodoListItem item={item} setTitle={setTitle} setEdit={setEdit} setEditId={setEditId} key={item?.id}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList