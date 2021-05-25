import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    const task1 = [
    {id: 1, title: "HTML&CSS", isDone: true },
    {id: 2, title: "JS", isDone: true },
    {id: 3, title: "React", isDone: false }
    ];

    const task2 = [
    {id: 1, title: "Hello world", isDone: true},
    {id: 2, title: "I am happy", isDone: false},
    {id: 3, title: "Yo", isDone: false}
    ]

    return (
        <div className={"App"}>
            <Todolist title={"What to learn"} tasks={task1} />
            <Todolist title={"Songs"} tasks={task2} />
            <Todolist title={"Books"} tasks={task1} />
        </div>
    )
}

export default App;
