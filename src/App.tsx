import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TasksType = {
    [key: string]: Array<TaskType>
}

function App() {
    let todolistId1 = v1();
    let todolistId2 = v1();


    let [tasks, setTasks] = useState<TasksType>({
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: true},
        ]
    })

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "active"},
    ])

    function removeTask(id: string, todolistId: string) {
        let tasksForTodolist = tasks[todolistId];
        let filteredTasks = tasksForTodolist.filter(t => t.id !== id);
        tasks[todolistId] = [...filteredTasks];
        setTasks({...tasks});
    }

    function addTask(title: string, todolistId: string) {
        let tasksForTodolist = tasks[todolistId];
        let task = {id: v1(), title: title, isDone: false};
        tasks[todolistId] = [task, ...tasksForTodolist];
        setTasks({...tasks})
    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        let tasksForTodolist = tasks[todolistId];
        let task = tasksForTodolist.find(t => t.id === taskId);
        if(task) {
            task.isDone = isDone
            setTasks({...tasks})
        }
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId);
        if (todolist) {
            todolist.filter = value;
            setTodolists([...todolists])
        }
    }

    function removeTodolist(todolistId: string) {
        setTodolists(todolists.filter(tl => tl.id !== todolistId))
        delete tasks[todolistId];
        setTasks({...tasks});
    }

    return (
        <div className="App">
            {
                todolists.map(tl => {
                    let tasksForTodolist = tasks[tl.id];

                    if (tl.filter === "active") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
                    }

                    return <Todolist
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                        removeTodolist={removeTodolist}
                    />
                })}

        </div>
    );
}

export default App;
