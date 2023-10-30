import React from 'react';
import './App.css';
import Todolist from './todolist/Todolist';

function App() {

    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: false},
        {id: 3, title: "REACT", isDone: false},
    ]

    const tasks2 = [
        {id: 1, title: "computer", isDone: true},
        {id: 2, title: "mouse", isDone: false},
        {id: 3, title: "keyboard", isDone: true},
    ]


    return (
        <div className="app">
            <Todolist title="what to learn" tasks={tasks1}/>
            <Todolist title="what to buy" tasks={tasks2}/>

        </div>
    );
}

export default App;
