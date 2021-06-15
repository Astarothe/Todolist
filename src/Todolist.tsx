import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeStatus: (id: string, isDone: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("");
    let [error, setError] = useState<null | string>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value);
    }

    const addTask = () => {
        if(title.trim()){
            props.addTask(title.trim());
        }else {
            setError("Title is required")
        }
        setTitle("")
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTask()
        }
    }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input className={error ? "error" : ""}
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>

            {error && <div className={"errorMessage"}>{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                        const onClickHandler = () => props.removeTask(t.id);

                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeStatus(t.id, e.currentTarget.checked)
                        }
                        return (
                            <li key={t.id} className={t.isDone ? "isDone" : ""}>
                                <input type="checkbox" checked={t.isDone} onChange={onChangeHandler}/>
                                <span>{t.title}</span>
                                <button onClick={onClickHandler}>x</button>
                            </li>
                        )
                    }
                )
            }
        </ul>
        <div>
            <button onClick={onAllClickHandler} className={props.filter === "all" ? "activeFilter": ""}>All</button>
            <button onClick={onActiveClickHandler} className={props.filter === "active" ? "activeFilter": ""}>Active</button>
            <button onClick={onCompletedClickHandler} className={props.filter === "completed" ? "activeFilter": ""}>Completed</button>
        </div>
    </div>
}
