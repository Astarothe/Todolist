import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type IsDoneType = "All" | "Active" | "Completed"

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
        {id: 5, title: "GraphQL", isDone: false},
    ]);
    let newTasks = tasks;

    const removeTasks = (id: number) => {
        newTasks = tasks.filter(t => t.id !== id);
        console.log(newTasks,tasks);
        setTasks(newTasks)
    }

    const [filter, setFilter] = useState<IsDoneType>("All")

    const filterTasks = (isDone: IsDoneType) => {
        setFilter(isDone)
    }

    if (filter === "Active") {
        newTasks = newTasks.filter(t => !t.isDone)
    } else if (filter === "Completed") {
        newTasks = newTasks.filter(t => t.isDone)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={newTasks}
                      removeTasks={removeTasks}
                      filterTasks={filterTasks}/>

        </div>
    );
}

export default App;
