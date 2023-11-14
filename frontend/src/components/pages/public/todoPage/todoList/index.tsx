import React from "react"
import Button from "../../../../forms/button/index"
import { TodoListItem } from "./TodoListItem"
import { TodoItem } from "../../../../../types"
import { TodoListProps } from "../../../../../types"

const TodoList: React.FC<TodoListProps> = ({setTitle,setEdit,setEditId,fetchData, list, notStatus,setNotStatus}) => {
    
    return (
        <div className="col-10 py-3">
            <h2 className="text-center">Todo List</h2>
            <div className="row justify-content-between">
                <Button buttonValue={"All"} additionalClass={"btn-danger bg-aqua w-25 " + (notStatus === 2 ? "bg-danger" : "bg-aqua")} onClick={() => setNotStatus(2)} />
                <Button buttonValue={"Done"} additionalClass={"btn-danger bg-aqua w-25 " + (notStatus === 0 ? "bg-danger" : "bg-aqua")} onClick={() => setNotStatus(0)} />
                <Button buttonValue={"Todo"} additionalClass={"btn-danger bg-aqua w-25 " + (notStatus === 1 ? "bg-danger" : "bg-aqua")} onClick={() => setNotStatus(1)} />
            </div>
            <ul className="list-group">
                {list.map((item: TodoItem) => (
                    <TodoListItem item={item} setTitle={setTitle} setEdit={setEdit} setEditId={setEditId} fetchData={fetchData} key={item?.id}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList