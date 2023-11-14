import React, { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import TodoInput from "./todoInput/index"
import TodoList from "./todoList"


const TodoPage: React.FC = () => {
  const [title, setTitle] = useState<string>("")
  const [edit, setEdit] = useState<boolean>(false)
  const [editId, setEditId] = useState<number>(0)

  const submitHandler = (title?: string) => {
    if (!title) {
      Swal.fire({
        title: "Error",
        text: "Title can't be empty",
        icon: "error"
      })
    }
    else if (edit) {
      const id=editId
      axios.post(`http://localhost:3000/api/update/${id}`, { title })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        Swal.fire({
          title: "Success",
          text: "Todo successfully updated",
          icon: "success"
        })
      setEdit(false)
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
  }
  return (
    <div className="row justify-content-center container-fluid">
      <TodoInput title={title} setTitle={setTitle} submitHandler={submitHandler} />
      <TodoList setTitle={setTitle} setEdit={setEdit} setEditId={setEditId} />
    </div>
  )
}

export default TodoPage