import React, {useEffect, useState} from 'react'
import {todolistsApi} from "../api/todolists-api";

export default {
    title: 'API'
}



export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsApi.getTodolists()
            .then(res => setState(res.data))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsApi.createTodolists( "Astaroth")
            .then(res => setState(res.data))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "12ff849a-8ea6-4940-85ca-3309bfbcf9de"
        todolistsApi.deleteTodolists(todolistId)
            .then(res => setState(res.data))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "12ff849a-8ea6-4940-85ca-3309bfbcf9de"
        todolistsApi.updateTodolists(todolistId, "Newssss")
            .then(res => setState(res.data))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

