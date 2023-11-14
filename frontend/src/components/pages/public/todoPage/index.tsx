import React, { useState, useEffect } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import TodoInput from "./todoInput/index"
import TodoList from "./todoList"
import { TodoItem } from "../../../../types"

const TodoPage: React.FC = () => {
  const [title, setTitle] = useState<string>("")
  const [editId, setEditId] = useState<number>(0)
  const [list, setList] = useState<TodoItem[]>([])
  const [notStatus, setNotStatus] = useState<number>(2)

  useEffect(() => {
    fetchData()
  }, [notStatus])

  const fetchData = () => {
    axios.get(`http://localhost:3000/api/${notStatus}`)
      .then((res) => setList(res?.data))
      .catch((err) => console.log(err))
  }

  const submitHandler = (title?: string) => {
    if (!title) {
      Swal.fire({
        title: "Error",
        text: "Title can't be empty",
        icon: "error"
      })
    }
    else if (editId>0) {
      const id = editId
      axios.post(`http://localhost:3000/api/update/${id}`, { title })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
      Swal.fire({
        title: "Success",
        text: "Todo successfully updated",
        icon: "success"
      })
      setEditId(0)
      setTitle("")
    }
    else {
      axios.post("http://localhost:3000/api/insert", { title })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
      Swal.fire({
        title: "Success",
        text: "New Todo successfully added",
        icon: "success"
      })
      setTitle("")
    }
    fetchData()
  }
  return (
    <div className="row justify-content-center container-fluid">
      <TodoInput title={title} setTitle={setTitle} editId={editId} submitHandler={submitHandler} />
      <TodoList setTitle={setTitle} setEditId={setEditId} fetchData={fetchData} list={list} notStatus={notStatus} setNotStatus={setNotStatus} />
    </div>
  )
}

export default TodoPage