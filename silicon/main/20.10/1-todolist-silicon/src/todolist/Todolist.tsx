import React from 'react'

type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

type PropsType = {
    title: string,
    tasks : Array<TaskType>
}

const Todolist = (props: PropsType) => {
    
    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {
                        props.tasks.map(t => <li>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button>X</button>
                        </li>)
                    }
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
}

export default Todolist