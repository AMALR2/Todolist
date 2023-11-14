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
    const [list, setList] = useState<TodoItem[]>([])
    const [notStatus,setNotStatus]=useState<number>(2)
    useEffect(() => {
        fetchData()
    }, [notStatus])
    const fetchData=()=>{
        axios.get(`http://localhost:3000/api/${notStatus}`)
            .then((res) => setList(res.data))
            .catch((err) => console.log(err))
    }
    return (
        <div className="col-10 py-3">
            <h2 className="text-center">Todo List</h2>
            <div className="row justify-content-between">
                <Button buttonValue={"All"} additionalClass={"bg-aqua w-25"} onClick={() => setNotStatus(2)} />
                <Button buttonValue={"Done"} additionalClass={"bg-aqua w-25"} onClick={() => setNotStatus(0)} />
                <Button buttonValue={"Todo"} additionalClass={"bg-aqua w-25"} onClick={() => setNotStatus(1)} />
            </div>
            <ul className="list-group">
                {list.map((item: TodoItem) => (
                    <TodoListItem item={item} setTitle={setTitle} setEdit={setEdit} setEditId={setEditId} key={item?.id}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList