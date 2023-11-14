import React from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import Button from "../../../../forms/button";
import { TodoListItemProps } from "../../../../../types";

export const TodoListItem: React.FC<TodoListItemProps> = ({ item,setTitle,setEdit,setEditId,fetchData }) => {
    const checkboxHandler = (id: number) => {
        axios.post(`http://localhost:3000/api/check/${id}`)
            .then(res => console.log(res.data))
            .catch(error => console.error(error))
        fetchData()
    }
    const updateHandler=()=>{
        setEdit(true)
        setEditId(item.id)
        setTitle(item.title)
    }
    const deleteHandler = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                const id=item.id
                axios.delete(`http://localhost:3000/api/delete/${id}`)
                    .then(res => console.log(res.data))
                    .catch(error => console.error(error))
                Swal.fire("Deleted!", "Your todo has been deleted.", "success")
                fetchData()
            }
        })
    }

    return (
        <li className="d-flex justify-content-between align-items-center border list-group-item m-2">
            <div className="d-flex align-items-center">
                <span className={item.status === 1 ? "text-decoration-line-through text-danger" : "text-decoration-none"}>
                    {item.title}
                </span>
            </div>
            <div className="d-flex">
                <div className="form-check me-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={item.status === 1}
                        onChange={() => checkboxHandler(item?.id)}
                    />
                </div>
                <Button additionalClass="me-2" icon="fa-solid fa-pen" onClick={() => updateHandler()}/>
                <Button additionalClass="me-2" icon="fa-solid fa-trash" onClick={() => deleteHandler()} />
            </div>
        </li>
    )
}
