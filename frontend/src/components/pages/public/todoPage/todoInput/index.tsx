import React from "react";
import Input from "../../../../forms/input/index";
import { TodoInputIcon } from "./TodoInputIcon";
import Button from "../../../../forms/button/index";
import { TodoInputProps } from "../../../../../types";

const TodoInput: React.FC<TodoInputProps> = ({ title, setTitle, editId, submitHandler }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submitHandler(title)
  };

  return (
    <div className="col-10 py-3">
      <h2 className="text-center">Todo Input</h2>
      <form className="p-3 border" onSubmit={handleSubmit}>
        <div className="input-group pb-3">
          <TodoInputIcon />
          <Input placeHolder="New Todo" value={title} onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <Button buttonValue={editId>0?"Update":"Add new task"} additionalClass="btn-danger bg-aqua w-100"/>
      </form>
    </div>
  )
}

export default TodoInput;
