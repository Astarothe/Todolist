import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "42aa837a-8390-46f1-8f1e-90039525de3d"
    }
}

export const todolistsApi = {
    getTodolists() {
        return axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
    },
    createTodolists(title: string) {
        return axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists", {title}, settings)
    },
    deleteTodolists(id: string) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists${id}`, settings)
    },
    updateTodolists(id: string, title: string) {
        return axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists${id}`, {title}, settings)
    }
}