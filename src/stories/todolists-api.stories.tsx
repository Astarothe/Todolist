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
        todolistsApi.createTodolists("Astaroth")
            .then(res => setState(res.data))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "639a9688-d581-4dee-a775-ac65363e832d"
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

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<any>("")

    const getTask = () => {
        todolistsApi.getTasks(todolistId)
            .then(res => setState(res.data))
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input type="text" placeholder={"todolistId"} value={todolistId} onChange={(e) => {setTodolistId(e.currentTarget.value)}}/>
            <button onClick={getTask}>get task</button>
        </div>
    </div>
}
export const CreateTasks = () => {
    const [state, setState] = useState<any>(null)
    const [taskTitle, setTaskTitle] = useState<any>("")
    const [todolistId, setTodolistId] = useState<any>("")

    const deleteTask = () => {
        todolistsApi.createTasks(todolistId,taskTitle)
            .then(res => setState(res.data))
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input type="text" placeholder={"todolistId"} value={todolistId} onChange={(e) => {setTodolistId(e.currentTarget.value)}}/>
            <input type="text" placeholder={"title"} value={taskTitle} onChange={(e) => {setTaskTitle(e.currentTarget.value)}}/>
            <button onClick={deleteTask}>create task</button>
        </div>
    </div>
}
export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<any>("")
    const [todolistId, setTodolistId] = useState<any>("")

    const deleteTask = () => {
        todolistsApi.deleteTasks(todolistId,taskId)
            .then(res => setState(res.data))
    }

    return <div> {JSON.stringify(state)}
    <div>
        <input type="text" placeholder={"todolistId"} value={todolistId} onChange={(e) => {setTodolistId(e.currentTarget.value)}}/>
        <input type="text" placeholder={"taskId"} value={taskId} onChange={(e) => {setTaskId(e.currentTarget.value)}}/>
        <button onClick={deleteTask}>delete task</button>
    </div>
    </div>

}
export const UpdateTasks = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<any>("")
    const [todolistId, setTodolistId] = useState<any>("")
    const [taskTitle, setTaskTitle] = useState<any>("")



    const updateTask = () => {
        todolistsApi.updateTasks(todolistId,taskId,taskTitle)
            .then(res => setState(res.data))
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input type="text" placeholder={"todolistId"} value={todolistId} onChange={(e) => {setTodolistId(e.currentTarget.value)}}/>
            <input type="text" placeholder={"taskId"} value={taskId} onChange={(e) => {setTaskId(e.currentTarget.value)}}/>
            <input type="text" placeholder={"taskTitle"} value={taskTitle} onChange={(e) => {setTaskTitle(e.currentTarget.value)}}/>
            <button onClick={updateTask}>update task</button>
        </div>
    </div>
}
