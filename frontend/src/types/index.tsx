export interface TodoItem {
    id: number
    title: string
    status: number
}
export interface TodoInputProps {
    title: string
    setTitle: React.Dispatch<React.SetStateAction<string>>
    edit:boolean
    submitHandler: (title: string) => void
}
export interface TodoListProps {
    setTitle: React.Dispatch<React.SetStateAction<string>>
    setEdit:React.Dispatch<React.SetStateAction<boolean>>
    setEditId:React.Dispatch<React.SetStateAction<number>>
    fetchData:()=>void
    list:TodoItem[]
    notStatus:number
    setNotStatus:React.Dispatch<React.SetStateAction<number>>
}
export interface TodoListItemProps {
    item: TodoItem
    setTitle: React.Dispatch<React.SetStateAction<string>>
    setEdit:React.Dispatch<React.SetStateAction<boolean>>
    setEditId:React.Dispatch<React.SetStateAction<number>>
    fetchData:() => void
}

