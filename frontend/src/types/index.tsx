import React from 'react'
export interface BrowserRouteWrapperProps {
    children: React.ReactNode;
}
export interface TodoItem {
    id: number
    title: string
    status: number
}
export interface TodoInputProps {
    title: string
    setTitle: React.Dispatch<React.SetStateAction<string>>
    editId:number
    submitHandler: (title: string) => void
}
export interface TodoListProps {
    setTitle: React.Dispatch<React.SetStateAction<string>>
    setEditId:React.Dispatch<React.SetStateAction<number>>
    fetchData:()=>void
    list:TodoItem[]
    notStatus:number
    setNotStatus:React.Dispatch<React.SetStateAction<number>>
}
export interface TodoListItemProps {
    item: TodoItem
    setTitle: React.Dispatch<React.SetStateAction<string>>
    setEditId:React.Dispatch<React.SetStateAction<number>>
    fetchData:() => void
}
export interface ButtonProps {
    buttonValue?: string,
    additionalClass?: string,
    icon?: string;
    onClick?: () => void;
}
export interface inputProps{
    placeHolder?:string,
    value?:string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

