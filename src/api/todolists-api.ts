import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "42aa837a-8390-46f1-8f1e-90039525de3d"
    }
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    ...settings
})

export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}

type ResponseType<D = {}> = {
    resultCode: number
    messages: string[],
    data: D
}

type ResponseDeleteType = {
    fieldsErrors: string[]
}

export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3
}

export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4
}

export type TaskType = {
    description: string
    title: string

    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

export type UpdateTaskModelType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
}

type GetTaskResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}

export const todolistsApi = {
    getTodolists() {
        return instance.get<TodolistType[]>("todo-lists")
    },
    createTodolists(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>("todo-lists", {title})
    },
    deleteTodolists(id: string) {
        return instance.delete<ResponseType>(`${id}`)
    },
    updateTodolists(id: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${id}`, {title})
    },
    getTasks(todolistId: string) {
        return instance.get<GetTaskResponse>(`todo-lists/${todolistId}/tasks`)
    },
    createTasks(todolistId: string, title: string) {
        return instance.post<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks`, {title})
    },
    deleteTasks(todolistId: string, taskId: string) {
        return instance.delete<ResponseType & ResponseDeleteType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTasks(todolistId: string, taskId: string, title: string) {
        return instance.put<ResponseType<UpdateTaskModelType>>(`todo-lists/${todolistId}/tasks/${taskId}`, {title})
    }
}