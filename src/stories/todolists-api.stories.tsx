import React, {useEffect, useState} from 'react'
import axios from "axios"
export default {
    title: 'API'
}

const settings = {
<<<<<<< HEAD
    withCredentials: true,
    headers:{
        "API-KEY": "42aa837a-8390-46f1-8f1e-90039525de3d"
    }
=======
    withCredentials: true
>>>>>>> 4c356666a3c96a24de534ac2d8fa99e0597432f3
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists",settings)
<<<<<<< HEAD
            .then(res => setState(res.data))
=======
            .then(data => setState(data.data))
>>>>>>> 4c356666a3c96a24de534ac2d8fa99e0597432f3

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
<<<<<<< HEAD
        axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists",{title:"Astaroth"},settings)
            .then(res => setState(res.data))
=======
>>>>>>> 4c356666a3c96a24de534ac2d8fa99e0597432f3
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div> {JSON.stringify(state)}</div>
<<<<<<< HEAD
}
=======
}
>>>>>>> 4c356666a3c96a24de534ac2d8fa99e0597432f3
